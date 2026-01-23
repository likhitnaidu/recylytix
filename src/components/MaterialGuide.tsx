import { useState } from 'react';
import { materials, Material } from '@/data/materials';
import { recyclingCenters } from '@/data/recyclingCenters';
import { ChevronRight, ChevronDown, MapPin, CheckCircle2, Lightbulb, X } from 'lucide-react';

interface MaterialGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onMaterialSelect: (materialId: string | null) => void;
  selectedMaterial: string | null;
}

const MaterialGuide = ({ isOpen, onClose, onMaterialSelect, selectedMaterial }: MaterialGuideProps) => {
  const [expandedMaterial, setExpandedMaterial] = useState<string | null>(null);

  const handleMaterialClick = (material: Material) => {
    if (expandedMaterial === material.id) {
      setExpandedMaterial(null);
    } else {
      setExpandedMaterial(material.id);
    }
  };

  const handleFilterToggle = (materialId: string) => {
    if (selectedMaterial === materialId) {
      onMaterialSelect(null);
    } else {
      onMaterialSelect(materialId);
    }
  };

  const getCentersForMaterial = (materialName: string) => {
    return recyclingCenters.filter(center =>
      center.materials.some(m => m.toLowerCase() === materialName.toLowerCase())
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-card border-l border-border z-[2000] animate-slide-in-right overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between bg-card">
        <div>
          <h2 className="font-display font-semibold text-lg text-foreground">Material Guide</h2>
          <p className="text-sm text-muted-foreground">Learn how to prepare recyclables</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Material List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {materials.map((material) => {
          const isExpanded = expandedMaterial === material.id;
          const isFiltered = selectedMaterial === material.id;
          const centersCount = getCentersForMaterial(material.name).length;

          return (
            <div
              key={material.id}
              className={`eco-card overflow-hidden transition-all duration-300 ${
                isFiltered ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Material Header */}
              <button
                onClick={() => handleMaterialClick(material)}
                className="w-full p-4 flex items-center gap-3 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-2xl">{material.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground">{material.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {centersCount} center{centersCount !== 1 ? 's' : ''} accept this
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-4 animate-fade-in">
                  {/* Filter Button */}
                  <button
                    onClick={() => handleFilterToggle(material.id)}
                    className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      isFiltered
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <MapPin className="w-4 h-4 inline mr-2" />
                    {isFiltered ? 'Showing on Map' : 'Show Centers on Map'}
                  </button>

                  {/* Preparation Steps */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Preparation Steps
                    </h4>
                    <ol className="space-y-2">
                      {material.preparationSteps.map((step, index) => (
                        <li key={index} className="flex gap-3 text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-medium">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Tips */}
                  <div className="eco-gradient-bg rounded-lg p-3">
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      Tips
                    </h4>
                    <ul className="space-y-1.5">
                      {material.tips.map((tip, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Centers that accept this material */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Accepting Centers
                    </h4>
                    <div className="space-y-1.5">
                      {getCentersForMaterial(material.name).map(center => (
                        <div
                          key={center.id}
                          className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2"
                        >
                          <MapPin className="w-3 h-3 text-primary" />
                          <span className="font-medium text-foreground">{center.name}</span>
                          <span className="text-muted-foreground">• {center.city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaterialGuide;
