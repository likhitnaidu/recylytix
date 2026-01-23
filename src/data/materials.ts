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
    preparationSteps: [
      "Rinse containers thoroughly to remove food residue",
      "Remove and discard caps if they are a different type of plastic",
      "Check the recycling number (1-7) on the bottom",
      "Flatten bottles and containers to save space",
      "Keep plastics dry before disposal",
      "Separate by plastic type if required by your center"
    ],
    tips: [
      "Avoid recycling plastic bags in regular bins - they jam machinery",
      "Styrofoam is often not accepted - check with your center",
      "Clean containers don't need to be spotless, just food-free"
    ]
  },
  {
    id: "paper",
    name: "Paper",
    icon: "📄",
    color: "hsl(45 70% 50%)",
    preparationSteps: [
      "Remove any plastic wrapping or windows from envelopes",
      "Keep paper dry and clean",
      "Flatten cardboard boxes completely",
      "Remove staples and paper clips if possible",
      "Bundle newspapers together",
      "Shred sensitive documents if needed"
    ],
    tips: [
      "Waxed paper and paper towels are usually not recyclable",
      "Pizza boxes with grease stains should be composted instead",
      "Glossy magazines are usually recyclable"
    ]
  },
  {
    id: "glass",
    name: "Glass",
    icon: "🫙",
    color: "hsl(160 60% 45%)",
    preparationSteps: [
      "Rinse containers to remove food residue",
      "Remove metal lids and caps separately",
      "Do not break the glass intentionally",
      "Separate by color if required (clear, green, brown)",
      "Remove labels if they peel off easily",
      "Keep glass dry and free from contamination"
    ],
    tips: [
      "Broken glass should be wrapped safely before disposal",
      "Window glass and mirrors have different compositions - not recyclable",
      "Light bulbs require special recycling"
    ]
  },
  {
    id: "metal",
    name: "Metal",
    icon: "🥫",
    color: "hsl(220 20% 50%)",
    preparationSteps: [
      "Rinse cans and tins to remove food residue",
      "Remove paper labels if they come off easily",
      "Crush cans to save space (optional)",
      "Keep lids attached or place inside the can",
      "Separate aluminum from steel if required",
      "Clean aluminum foil and ball it up"
    ],
    tips: [
      "Aerosol cans should be completely empty before recycling",
      "Check if your center accepts scrap metal separately",
      "Metal caps from glass bottles are recyclable"
    ]
  },
  {
    id: "ewaste",
    name: "E-waste",
    icon: "📱",
    color: "hsl(280 60% 50%)",
    preparationSteps: [
      "Back up and wipe all personal data from devices",
      "Remove batteries if possible - recycle separately",
      "Keep cords and chargers with their devices",
      "Do not disassemble electronics yourself",
      "Store in a dry place until ready to recycle",
      "Include original packaging if available"
    ],
    tips: [
      "Many electronics retailers offer take-back programs",
      "Old phones contain valuable materials worth recovering",
      "Never throw batteries in regular trash - fire hazard"
    ]
  },
  {
    id: "batteries",
    name: "Batteries",
    icon: "🔋",
    color: "hsl(50 80% 45%)",
    preparationSteps: [
      "Tape the terminals of lithium batteries to prevent fires",
      "Store used batteries in a non-metal container",
      "Never puncture or crush batteries",
      "Keep batteries dry at all times",
      "Separate rechargeable from single-use batteries",
      "Bring to designated collection points only"
    ],
    tips: [
      "Car batteries should be returned to auto shops",
      "Swollen batteries are dangerous - handle with extra care",
      "Some stores have battery drop-off bins"
    ]
  },
  {
    id: "textiles",
    name: "Textiles",
    icon: "👕",
    color: "hsl(340 60% 55%)",
    preparationSteps: [
      "Wash and dry all clothing items",
      "Ensure items are free from excessive damage",
      "Pair shoes together with rubber bands",
      "Separate usable items from rags",
      "Place in designated textile bins",
      "Include accessories like belts and bags"
    ],
    tips: [
      "Even torn clothes can be recycled into insulation",
      "Many charities accept wearable donations",
      "Leather and synthetic materials may need separate processing"
    ]
  },
  {
    id: "organic",
    name: "Organic Waste",
    icon: "🍂",
    color: "hsl(30 60% 45%)",
    preparationSteps: [
      "Separate food scraps from packaging",
      "Remove any stickers from fruits and vegetables",
      "Avoid including meat and dairy in home composting",
      "Cut large items into smaller pieces",
      "Keep organic waste in a covered container",
      "Mix greens and browns for balanced composting"
    ],
    tips: [
      "Coffee grounds and eggshells are great for compost",
      "Avoid adding diseased plants to compost",
      "Composting reduces landfill methane emissions significantly"
    ]
  }
];
