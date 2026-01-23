import { useState } from 'react';
import Header from '@/components/Header';
import RecyclingMap from '@/components/RecyclingMap';
import MaterialGuide from '@/components/MaterialGuide';
import CenterList from '@/components/CenterList';
import { RecyclingCenter } from '@/data/recyclingCenters';
import { List, Map } from 'lucide-react';

const Index = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<RecyclingCenter | null>(null);
  const [filterMaterial, setFilterMaterial] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const handleGuideToggle = () => {
    setIsGuideOpen(!isGuideOpen);
  };

  const handleCenterSelect = (center: RecyclingCenter | null) => {
    setSelectedCenter(center);
    setShowList(false); // Switch to map view on mobile when center is selected
  };

  const handleMaterialFilter = (materialId: string | null) => {
    setFilterMaterial(materialId);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <Header onGuideToggle={handleGuideToggle} isGuideOpen={isGuideOpen} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar - Center List (Desktop) */}
        <aside className="hidden md:block w-80 border-r border-border overflow-hidden">
          <CenterList
            onCenterSelect={handleCenterSelect}
            selectedCenter={selectedCenter}
            filterMaterial={filterMaterial}
          />
        </aside>

        {/* Map */}
        <main className="flex-1 relative">
          {/* Mobile Toggle */}
          <div className="absolute top-4 left-4 z-[1000] md:hidden">
            <button
              onClick={() => setShowList(!showList)}
              className="eco-card px-3 py-2 flex items-center gap-2"
            >
              {showList ? (
                <>
                  <Map className="w-4 h-4" />
                  <span className="text-sm font-medium">Map</span>
                </>
              ) : (
                <>
                  <List className="w-4 h-4" />
                  <span className="text-sm font-medium">List</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile List View */}
          {showList && (
            <div className="absolute inset-0 z-[999] md:hidden bg-card">
              <CenterList
                onCenterSelect={handleCenterSelect}
                selectedCenter={selectedCenter}
                filterMaterial={filterMaterial}
              />
            </div>
          )}

          <RecyclingMap
            onCenterSelect={handleCenterSelect}
            selectedCenter={selectedCenter}
            filterMaterial={filterMaterial}
          />
        </main>

        {/* Material Guide Sidebar */}
        <MaterialGuide
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
          onMaterialSelect={handleMaterialFilter}
          selectedMaterial={filterMaterial}
        />
      </div>
    </div>
  );
};

export default Index;
