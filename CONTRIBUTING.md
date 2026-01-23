# Contributing to RecyLyTix

Thank you for your interest in contributing to RecyLyTix!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/recylytix.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit: `git commit -m "Add your feature"`
6. Push: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development

```bash
npm install
npm run dev
```

## Code Style

- Use TypeScript for all new files
- Follow existing code patterns
- Use Tailwind CSS for styling
- Keep components small and focused

## Adding Recycling Centers

Edit `src/data/recyclingCenters.ts` to add new centers with:
- Name, city, coordinates
- Accepted materials array

## Adding Materials

Edit `src/data/materials.ts` to add new materials with:
- Name, icon, color
- Preparation steps and tips
