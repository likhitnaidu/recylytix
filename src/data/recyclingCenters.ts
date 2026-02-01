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
  },
  {
id: "6",
name: "Escrappy Recyclers",
city: "Bengaluru",
address: "Shushruti Nagar, Byraveshwara Industrial Estate, Bengaluru, Karnataka 560091, India",
latitude: 13.0084,
longitude: 77.4983,
materials: ["E-waste", "Electronic Scrap", "Data Destruction"],
phone: "+91 99809 97863",
hours: "Mon-Sat: 9:00 AM - 6:30 PM"
}
,
{
id: "7",
name: "Ewaste Hub",
city: "Bengaluru",
address: "No 3, Opp Hombegowda Ground, Lakkasandra Ext, Wilson Garden, Bengaluru, Karnataka 560027, India",
latitude: 12.9466,
longitude: 77.5961,
materials: ["E-waste", "Household Electronics"],
phone: "+91 90663 19066",
hours: "Daily: 6:00 AM - 10:00 PM"
},

{
id: "8",
name: "Zolopik",
city: "Bengaluru",
address: "58, 22nd Main Rd, Marenahalli, 2nd Phase, J.P. Nagar, Bengaluru, Karnataka 560078, India",
latitude: 12.9156,
longitude: 77.5872,
materials: ["E-waste", "Electronic Scrap", "Batteries"],
phone: "+91 97434 40440",
hours: "Mon-Sat: 9:00 AM - 5:00 PM"
}
,
{
id: "9",
name: "E‑ Parisaraa Private Limited",
city: "Bengaluru",
address: "No-b, 41/1, 3rd Stage, Maruthi Nagar, Peenya, Bengaluru, Karnataka 560058, India",
latitude: 13.0180,
longitude: 77.5011,
materials: ["E-waste", "Batteries", "Metals"],
phone: "+91 80283 60902",
hours: "Mon-Sat: 9:00 AM - 5:30 PM"
},

{
id: "10",
name: "Prakruthi Recycling Pvt. Ltd",
city: "Bengaluru",
address: "511, 60 Feet Road, A Block, RHCS Layout, 2nd Stage, Naagarabhaavi, Bengaluru, Karnataka 560091, India",
latitude: 12.9786,
longitude: 77.4978,
materials: ["E-waste", "Plastic", "IT Asset Disposal"],
phone: "+91 1800 102 8286",
hours: "Mon-Fri: 9:00 AM - 1:30 PM"
}
,
{
id: "11",
name: "E Hasiru E Waste Recycling Company",
city: "Bengaluru",
address: "No 168/B, 7th Main Rd, Yeshwanthpur Suburb II Stage, Peenya, Bengaluru, Karnataka 560058, India",
latitude: 13.0224,
longitude: 77.5278,
materials: ["E-waste", "Batteries", "Electronic Scrap"],
phone: "+91 98454 64343",
hours: "Mon-Sat: 9:30 AM - 6:30 PM"
}
,
{
id: "12",
name: "E‑FRIENDLY WASTE RECYCLERS",
city: "Bengaluru",
address: "1st Main Rd, Metro Lay Out, Nayanda Halli, Bengaluru, Karnataka 560026, India",
latitude: 12.9457,
longitude: 77.5256,
materials: ["General Recycling", "Plastic", "E-waste"],
phone: "+91 97400 57778",
hours: "Mon-Sat: 10:00 AM - 7:00 PM"
}
,
{
id: "13",
name: "Ezone Recycling (Doorstep pickup)",
city: "Bengaluru",
address: "(Doorstep pickup service) Bengaluru, Karnataka 560xxx, India",
latitude: 12.9366,
longitude: 77.6846,
materials: ["E-waste", "Recyclables"],
phone: "+91 63666 44141",
hours: "On request (pickup-based)"
}
,
{
id: "14",
name: "Sri Manjunatha Swamy traders - E Waste Buyer",
city: "Bengaluru",
address: "15/4, 6th cross Azad Nagar, Chamrajpet, Bengaluru, Karnataka 560018, India",
latitude: 12.9584,
longitude: 77.5556,
materials: ["E-waste", "Electronic Scrap"],
phone: "+91 94492 66336",
hours: "Walk-in (Check timing directly)"
}
,
{
id: "15",
name: "GRKMS Private Limited | E‑Waste Management Company",
city: "Bengaluru",
address: "Plot No.74, Road No.29B, KIADB Industrial Area 1st Stage, Sompura, Dobbaspet, Bengaluru, Karnataka 562111, India",
latitude: 13.2239,
longitude: 77.2664,
materials: ["E-waste", "Electronic Scrap", "Plastic"],
phone: "+91 99802 55556",
hours: "Mon-Sat: 9:00 AM - 5:00 PM"
}
];

export const defaultLocation = {
  latitude: 20.5937,
  longitude: 78.9629,
  zoom: 5
};
