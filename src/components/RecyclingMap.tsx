import { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { recyclingCenters, defaultLocation, RecyclingCenter } from '@/data/recyclingCenters';
import { MapPin, Navigation, Clock, Phone, Recycle } from 'lucide-react';

interface RecyclingMapProps {
  onCenterSelect: (center: RecyclingCenter | null) => void;
  selectedCenter: RecyclingCenter | null;
  filterMaterial: string | null;
}

interface UserLocation {
  latitude: number;
  longitude: number;
}

const RecyclingMap = ({ onCenterSelect, selectedCenter, filterMaterial }: RecyclingMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);
  const centerMarkersRef = useRef<L.Marker[]>([]);
  
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [routeInfo, setRouteInfo] = useState<{ distance: string; duration: string } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [routeError, setRouteError] = useState<string | null>(null);

  // Filter centers based on selected material
  const filteredCenters = filterMaterial
    ? recyclingCenters.filter(center => 
        center.materials.some(m => m.toLowerCase() === filterMaterial.toLowerCase())
      )
    : recyclingCenters;

  // Create custom icons
  const createCenterIcon = (isSelected: boolean) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div class="center-marker ${isSelected ? 'ring-4 ring-primary/50 scale-110' : ''}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
  };

  const createUserIcon = () => {
    return L.divIcon({
      className: 'custom-marker',
      html: '<div class="user-marker"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    mapRef.current = L.map(mapContainer.current, {
      center: [defaultLocation.latitude, defaultLocation.longitude],
      zoom: defaultLocation.zoom,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
      minZoom: 3,
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Watch user location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setLocationError(null);
        
        if (mapRef.current && userMarkerRef.current) {
          userMarkerRef.current.setLatLng([latitude, longitude]);
        } else if (mapRef.current && !userMarkerRef.current) {
          userMarkerRef.current = L.marker([latitude, longitude], {
            icon: createUserIcon(),
            zIndexOffset: 1000,
          }).addTo(mapRef.current);
          
          mapRef.current.setView([latitude, longitude], 12);
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Location access denied. Using default view.');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location unavailable. Using default view.');
            break;
          case error.TIMEOUT:
            setLocationError('Location request timed out. Using default view.');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Update center markers
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    centerMarkersRef.current.forEach(marker => marker.remove());
    centerMarkersRef.current = [];

    // Add markers for filtered centers
    filteredCenters.forEach(center => {
      const isSelected = selectedCenter?.id === center.id;
      const marker = L.marker([center.latitude, center.longitude], {
        icon: createCenterIcon(isSelected),
      });

      const popupContent = `
        <div class="p-4 min-w-[200px]">
          <h3 class="font-display font-semibold text-foreground text-base mb-1">${center.name}</h3>
          <p class="text-sm text-muted-foreground mb-2">${center.city}</p>
          <div class="flex flex-wrap gap-1 mb-2">
            ${center.materials.slice(0, 3).map(m => 
              `<span class="eco-badge text-xs">${m}</span>`
            ).join('')}
            ${center.materials.length > 3 ? `<span class="eco-badge text-xs">+${center.materials.length - 3}</span>` : ''}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => onCenterSelect(center));
      marker.addTo(mapRef.current!);
      centerMarkersRef.current.push(marker);
    });
  }, [filteredCenters, selectedCenter, onCenterSelect]);

  // Update selected marker style
  useEffect(() => {
    if (!mapRef.current) return;

    centerMarkersRef.current.forEach((marker, index) => {
      const center = filteredCenters[index];
      if (center) {
        const isSelected = selectedCenter?.id === center.id;
        marker.setIcon(createCenterIcon(isSelected));
        
        if (isSelected) {
          mapRef.current?.setView([center.latitude, center.longitude], 14);
        }
      }
    });
  }, [selectedCenter, filteredCenters]);

  // Fetch and draw route
  const fetchRoute = useCallback(async () => {
    if (!userLocation || !selectedCenter) return;

    setRouteError(null);

    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${userLocation.longitude},${userLocation.latitude};${selectedCenter.longitude},${selectedCenter.latitude}?overview=full&geometries=geojson`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.code !== 'Ok' || !data.routes?.[0]) {
        throw new Error('Route not found');
      }

      const route = data.routes[0];
      const coordinates = route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);

      // Remove existing route
      if (routeLayerRef.current) {
        routeLayerRef.current.remove();
      }

      // Draw new route
      routeLayerRef.current = L.polyline(coordinates, {
        color: 'hsl(142, 76%, 36%)',
        weight: 5,
        opacity: 0.8,
        className: 'route-line',
      }).addTo(mapRef.current!);

      // Fit map to show entire route
      mapRef.current?.fitBounds(routeLayerRef.current.getBounds(), { padding: [50, 50] });

      // Update route info
      const distanceKm = (route.distance / 1000).toFixed(1);
      const durationMin = Math.round(route.duration / 60);
      setRouteInfo({
        distance: `${distanceKm} km`,
        duration: `${durationMin} min`,
      });

      setIsNavigating(true);
    } catch (error) {
      console.error('Routing error:', error);
      setRouteError('Unable to calculate route. Please try again.');
    }
  }, [userLocation, selectedCenter]);

  // Update route when user moves during navigation
  useEffect(() => {
    if (isNavigating && userLocation && selectedCenter) {
      const debounceTimer = setTimeout(() => {
        fetchRoute();
      }, 2000);

      return () => clearTimeout(debounceTimer);
    }
  }, [userLocation, isNavigating, selectedCenter, fetchRoute]);

  const handleNavigate = () => {
    if (!userLocation) {
      setRouteError('Please enable location access to navigate');
      return;
    }
    fetchRoute();
  };

  const handleStopNavigation = () => {
    setIsNavigating(false);
    setRouteInfo(null);
    if (routeLayerRef.current) {
      routeLayerRef.current.remove();
      routeLayerRef.current = null;
    }
  };

  return (
    <div className="relative h-full w-full">
      <div ref={mapContainer} className="h-full w-full rounded-xl" />
      
      {/* Location Status */}
      {locationError && (
        <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-sm z-[1000]">
          <div className="eco-card px-4 py-3 bg-amber-50 border-amber-200">
            <p className="text-sm text-amber-800">{locationError}</p>
          </div>
        </div>
      )}

      {/* Route Error */}
      {routeError && (
        <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-sm z-[1000]">
          <div className="eco-card px-4 py-3 bg-red-50 border-red-200">
            <p className="text-sm text-red-800">{routeError}</p>
          </div>
        </div>
      )}

      {/* Navigation Panel */}
      {selectedCenter && (
        <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-80 z-[1000] animate-scale-in">
          <div className="eco-card p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display font-semibold text-foreground">{selectedCenter.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {selectedCenter.city}
                </p>
              </div>
              <button
                onClick={() => {
                  handleStopNavigation();
                  onCenterSelect(null);
                }}
                className="text-muted-foreground hover:text-foreground p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-muted-foreground mb-2">{selectedCenter.address}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {selectedCenter.materials.map(material => (
                <span key={material} className="eco-badge">
                  <Recycle className="w-3 h-3 mr-1" />
                  {material}
                </span>
              ))}
            </div>

            {selectedCenter.hours && (
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-1">
                <Clock className="w-3 h-3" />
                {selectedCenter.hours}
              </p>
            )}

            {selectedCenter.phone && (
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                <Phone className="w-3 h-3" />
                {selectedCenter.phone}
              </p>
            )}

            {isNavigating && routeInfo ? (
              <div className="space-y-2">
                <div className="eco-gradient-bg rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Distance</p>
                      <p className="font-semibold text-foreground">{routeInfo.distance}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Est. Time</p>
                      <p className="font-semibold text-foreground">{routeInfo.duration}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleStopNavigation}
                  className="eco-button-secondary w-full"
                >
                  Stop Navigation
                </button>
              </div>
            ) : (
              <button
                onClick={handleNavigate}
                className="eco-button-primary w-full"
                disabled={!userLocation}
              >
                <Navigation className="w-4 h-4" />
                {userLocation ? 'Navigate' : 'Enable Location'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* User Location Indicator */}
      {userLocation && (
        <div className="absolute top-4 right-4 z-[1000]">
          <div className="eco-card px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">Live Location</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecyclingMap;
