import { useState } from 'react';
import { recyclingCenters, RecyclingCenter } from '@/data/recyclingCenters';
import { MapPin, Recycle, ChevronRight, Search } from 'lucide-react';

interface CenterListProps {
  onCenterSelect: (center: RecyclingCenter) => void;
  selectedCenter: RecyclingCenter | null;
  filterMaterial: string | null;
}

const CenterList = ({ onCenterSelect, selectedCenter, filterMaterial }: CenterListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCenters = recyclingCenters.filter(center => {
    const matchesSearch = 
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesMaterial = filterMaterial
      ? center.materials.some(m => m.toLowerCase() === filterMaterial.toLowerCase())
      : true;

    return matchesSearch && matchesMaterial;
  });

  return (
    <div className="h-full flex flex-col bg-card">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="font-display font-semibold text-foreground mb-3">Recycling Centers</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search centers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {filterMaterial && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Filtered by:</span>
            <span className="eco-badge capitalize">{filterMaterial}</span>
          </div>
        )}
      </div>

      {/* Center List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {filteredCenters.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Recycle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No centers found</p>
          </div>
        ) : (
          filteredCenters.map(center => (
            <button
              key={center.id}
              onClick={() => onCenterSelect(center)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                selectedCenter?.id === center.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 hover:bg-muted'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className={`font-medium text-sm truncate ${
                    selectedCenter?.id === center.id ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {center.name}
                  </h3>
                  <p className={`text-xs flex items-center gap-1 mt-0.5 ${
                    selectedCenter?.id === center.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    <MapPin className="w-3 h-3" />
                    {center.city}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 flex-shrink-0 ${
                  selectedCenter?.id === center.id ? 'text-primary-foreground' : 'text-muted-foreground'
                }`} />
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {center.materials.slice(0, 3).map(material => (
                  <span
                    key={material}
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCenter?.id === center.id
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {material}
                  </span>
                ))}
                {center.materials.length > 3 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCenter?.id === center.id
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    +{center.materials.length - 3}
                  </span>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default CenterList;
