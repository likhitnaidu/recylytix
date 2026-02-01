export interface Material {
  id: string;
  name: string;
  icon: string;
  color: string;
  preparationSteps: string[];
  tips: string[];
}

export const materials: Material[] = [
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
    "Avoid crumpling unnecessarily",
    "Place heavier cardboard at bottom",
    "Use twine instead of plastic tape",
    "Inspect for moisture",
    "Keep moisture-free"
  ],
  storageGuidelines: "Stack flat in dry indoor area",
  tips: [
    "Wet paper is rejected",
    "Cardboard gives better returns",
    "Shred sensitive documents"
  ]
},

{
  id: "glass",
  name: "Glass",
  icon: "🫙",
  color: "hsl(160 60% 45%)",
  hazardLevel: "medium",
  resaleValue: "low",
  subTypes: ["Clear","Green","Brown"],
  acceptedItems: ["Jars","Bottles"],
  notAccepted: ["Mirrors","Window glass","Ceramics"],
  preparationSteps: [
    "Rinse thoroughly",
    "Remove lids",
    "Sort by color",
    "Do not break intentionally",
    "Wrap sharp edges if chipped",
    "Place dividers between bottles",
    "Label broken glass clearly",
    "Avoid stacking too high",
    "Transport in rigid crates",
    "Double-check for ceramic contamination"
  ],
  storageGuidelines: "Store upright in rigid container",
  tips: [
    "Broken glass needs separate handling",
    "Bulbs require special centers"
  ]
},

{
  id: "metal",
  name: "Metal",
  icon: "🥫",
  color: "hsl(220 20% 50%)",
  hazardLevel: "low",
  resaleValue: "high",
  subTypes: ["Aluminium","Steel","Copper"],
  acceptedItems: ["Cans","Foil","Scrap parts"],
  notAccepted: ["Gas cylinders","Pressurized cans"],
  preparationSteps: [
    "Rinse food residue",
    "Separate aluminium from steel",
    "Flatten sharp edges",
    "Bundle long pieces",
    "Drain trapped liquids",
    "Remove rubber fittings",
    "Keep small scraps together",
    "Sort copper independently"
  ],
  storageGuidelines: "Keep dry to prevent rust",
  tips: [
    "Copper gives highest payout",
    "Crush cans for space"
  ]
},

{
  id: "ewaste",
  name: "E-Waste",
  icon: "📱",
  color: "hsl(280 60% 50%)",
  hazardLevel: "high",
  resaleValue: "high",
  subTypes: ["Mobiles","Laptops","TVs","Printers"],
  acceptedItems: ["Electronics","Cables","Chargers"],
  notAccepted: ["Damaged batteries","Loose CRT powder"],
  preparationSteps: [
    "Back up data",
    "Factory reset devices",
    "Sign out of all accounts",
    "Remove SIM and SD cards",
    "Remove batteries",
    "Keep cords with devices",
    "Wrap screens",
    "Label non-working items",
    "Separate peripherals",
    "Log serial numbers if available"
  ],
  storageGuidelines: "Store indoors away from moisture",
  tips: [
    "Gold recovery happens here",
    "Never dump in landfill"
  ]
},

{
  id: "batteries",
  name: "Batteries",
  icon: "🔋",
  color: "hsl(50 80% 45%)",
  hazardLevel: "critical",
  resaleValue: "high",
  subTypes: ["Lithium-ion","Lead Acid","AA/AAA"],
  acceptedItems: ["Power banks","Rechargeables"],
  notAccepted: ["Leaking batteries"],
  preparationSteps: [
    "Tape terminals",
    "Separate by type",
    "Never crush",
    "Individually bag damaged units",
    "Mark swollen batteries",
    "Keep lithium separate",
    "Store upright",
    "Never stack loosely",
    "Limit storage time"
  ],
  storageGuidelines: "Non-metal box in cool area",
  tips: [
    "Fire risk if mishandled",
    "EV batteries are extremely valuable"
  ]
},

{
  id: "textiles",
  name: "Textiles",
  icon: "👕",
  color: "hsl(340 60% 55%)",
  hazardLevel: "low",
  resaleValue: "low",
  subTypes: ["Cotton","Polyester","Denim"],
  acceptedItems: ["Clothes","Shoes","Bags"],
  notAccepted: ["Wet fabrics"],
  preparationSteps: [
    "Wash items",
    "Button shirts and zip jackets",
    "Fold neatly",
    "Separate natural and synthetic",
    "Remove heavy embellishments",
    "Pair footwear",
    "Bundle accessories",
    "Discard moldy items"
  ],
  storageGuidelines: "Dry bags only",
  tips: [
    "Even torn clothes get recycled"
  ]
},

{
  id: "organic",
  name: "Organic Waste",
  icon: "🍂",
  color: "hsl(30 60% 45%)",
  hazardLevel: "low",
  resaleValue: "none",
  subTypes: ["Food waste","Garden waste"],
  acceptedItems: ["Peels","Leaves","Coffee grounds"],
  notAccepted: ["Plastic-lined waste"],
  preparationSteps: [
    "Remove packaging",
    "Drain excess liquids",
    "Chop large items",
    "Layer dry leaves",
    "Crush eggshells",
    "Avoid citrus overload",
    "Turn compost weekly",
    "Keep pests out"
  ],
  storageGuidelines: "Covered compost bin",
  tips: [
    "Reduces methane drastically"
  ]
}
];

