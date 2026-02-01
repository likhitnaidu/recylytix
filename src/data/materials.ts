export interface Material {
  id: string;
  name: string;
  icon: string;
  color: string;
  preparationSteps: string[];
  tips: string[];
}

export const materials: Material[] = [
  export const materials = [
{
  id: "plastic",
  name: "Plastic",
  icon: "🧴",
  color: "hsl(200 80% 50%)",
  hazardLevel: "low",
  resaleValue: "medium",
  subTypes: ["PET","HDPE","LDPE","PP"],
  acceptedItems: ["Bottles","Containers","Milk cans","Detergent bottles"],
  notAccepted: ["Multi-layer wrappers","Thermocol","Plastic bags"],
  preparationSteps: [
    "Empty and rinse containers",
    "Shake out remaining liquids",
    "Remove caps and labels",
    "Flatten bottles",
    "Separate by resin code",
    "Group similar plastics together",
    "Remove inner liners from bottles",
    "Avoid mixing flexible and rigid plastics",
    "Cut large containers if required",
    "Air-dry overnight if recently washed",
    "Ensure completely dry",
    "Keep away from heat sources"
  ],
  storageGuidelines: "Store in dry bags away from sunlight",
  tips: [
    "PET bottles have highest resale",
    "Never mix food-contaminated plastics",
    "Plastic bags clog sorting machines"
  ]
},

{
  id: "paper",
  name: "Paper & Cardboard",
  icon: "📄",
  color: "hsl(45 70% 50%)",
  hazardLevel: "low",
  resaleValue: "low",
  subTypes: ["Newspaper","Office paper","Corrugated cardboard"],
  acceptedItems: ["Books","Cartons","Notebooks"],
  notAccepted: ["Greasy pizza boxes","Tissues","Waxed paper"],
  preparationSteps: [
    "Remove plastic covers",
    "Flatten boxes",
    "Bundle newspapers",
    "Remove spiral bindings",
    "Tear glued spines from books",
    "Separate white and colored paper",
    "Avoid crumpling unne

];
