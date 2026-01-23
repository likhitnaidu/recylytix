# RecyLyTix – Recycling Locator and Preparation Guide

A web application that helps users find nearby recycling centers, get real-time navigation, and learn proper material preparation for recycling.

![RecyLyTix](https://img.shields.io/badge/RecyLyTix-Recycling%20Made%20Easy-2E7D32?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=flat-square&logo=leaflet)

## 🌱 Features

- **Interactive Map**: View recycling centers on a live Leaflet.js map with OpenStreetMap tiles
- **Real-time Location**: Track your current location with live GPS updates
- **Turn-by-turn Navigation**: Get routes from your location to any recycling center using OSRM
- **Material Guide**: Learn how to properly prepare different materials for recycling
- **Center Information**: View accepted materials and details for each recycling center
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 + Vite | Frontend framework |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling |
| Leaflet.js | Interactive maps |
| OpenStreetMap | Map tiles (no API key required) |
| OSRM | Routing/navigation (free public API) |
| shadcn/ui | UI components |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/recylytix.git

# Navigate to project directory
cd recylytix

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── CenterList.tsx      # Recycling center list view
│   ├── Header.tsx          # App header component
│   ├── MaterialGuide.tsx   # Material preparation guide panel
│   ├── RecyclingMap.tsx    # Main map component with navigation
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── materials.ts        # Material types and preparation steps
│   └── recyclingCenters.ts # Hardcoded recycling center data
├── pages/
│   ├── Home.tsx            # Landing page
│   └── MapDashboard.tsx    # Main map dashboard
└── index.css               # Global styles and theme
```

## ♻️ Supported Materials

- **Plastic** – Bottles, containers, packaging
- **Paper** – Newspapers, cardboard, office paper
- **Glass** – Bottles, jars (sorted by color)
- **Metal** – Aluminum cans, steel containers
- **E-waste** – Electronics, batteries, cables

Each material includes detailed preparation steps and recycling tips.

## 🗺️ Recycling Centers

The app includes 5 pre-configured recycling centers in India:
- Delhi Recycling Hub (Delhi)
- Mumbai Green Center (Mumbai)
- Bangalore Eco Point (Bangalore)
- Chennai Waste Solutions (Chennai)
- Hyderabad Recyclers (Hyderabad)

## 📄 License

This project is developed as a CSE Mini Project (Sept–Dec 2025).

## 🙏 Acknowledgments

- [OpenStreetMap](https://www.openstreetmap.org/) for free map tiles
- [OSRM](http://project-osrm.org/) for routing API
- [Leaflet](https://leafletjs.com/) for the mapping library
- [shadcn/ui](https://ui.shadcn.com/) for UI components
