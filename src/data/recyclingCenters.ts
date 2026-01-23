export interface RecyclingCenter {
  id: string;
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  materials: string[];
  phone?: string;
  hours?: string;
}

export const recyclingCenters: RecyclingCenter[] = [
  {
    id: "1",
    name: "Green Earth Recycling Hub",
    city: "Mumbai",
    address: "Plot 45, MIDC Industrial Area, Andheri East",
    latitude: 19.1136,
    longitude: 72.8697,
    materials: ["Plastic", "Paper", "Glass", "Metal", "E-waste"],
    phone: "+91 22 2836 1234",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM"
  },
  {
    id: "2",
    name: "EcoRecycle Bengaluru",
    city: "Bengaluru",
    address: "Survey No. 123, Electronic City Phase 1",
    latitude: 12.8456,
    longitude: 77.6603,
    materials: ["E-waste", "Plastic", "Metal", "Batteries"],
    phone: "+91 80 4567 8901",
    hours: "Mon-Fri: 8:00 AM - 7:00 PM"
  },
  {
    id: "3",
    name: "Clean Delhi Waste Management",
    city: "New Delhi",
    address: "Block C, Okhla Industrial Estate Phase 2",
    latitude: 28.5355,
    longitude: 77.2720,
    materials: ["Paper", "Cardboard", "Plastic", "Glass"],
    phone: "+91 11 2345 6789",
    hours: "Mon-Sat: 7:00 AM - 5:00 PM"
  },
  {
    id: "4",
    name: "Hyderabad Recyclers United",
    city: "Hyderabad",
    address: "IDA Uppal, Near Metro Station",
    latitude: 17.4065,
    longitude: 78.5594,
    materials: ["Plastic", "Metal", "E-waste", "Textiles"],
    phone: "+91 40 6789 0123",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM"
  },
  {
    id: "5",
    name: "Chennai Eco Solutions",
    city: "Chennai",
    address: "SIDCO Industrial Estate, Ambattur",
    latitude: 13.1143,
    longitude: 80.1548,
    materials: ["Glass", "Paper", "Plastic", "Organic Waste", "Metal"],
    phone: "+91 44 4321 5678",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM"
  }
];

export const defaultLocation = {
  latitude: 20.5937,
  longitude: 78.9629,
  zoom: 5
};
