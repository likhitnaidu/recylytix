import { Link } from "react-router-dom";
import { useMemo } from "react";
import { MapPin, Recycle, Leaf, ArrowRight, CheckCircle,} from "lucide-react";
import { Button } from "@/components/ui/button";
const FloatingLeaves = () => {
  const leaves = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10
      })),
    []
  );

  return (<div className="pointer-events-none fixed inset-0 overflow-hidden z-0 opacity-70">

      {leaves.map((leaf) => (
        <Leaf
          key={leaf.id}
          className="absolute text-green-900/80 animate-leaf"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`
          }}
        />
      ))}
    </div>
  );
};

const AnimatedTree = () => (
  <svg
    viewBox="0 0 300 400"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[360px] opacity-70 tree-grow z-10"
  >
    {/* Trunk */}
    <path
      d="M150 400 C145 320 145 260 150 200 C155 260 155 320 150 400"
      className="tree-trunk"
      fill="none"
      stroke="#14532d"
      strokeWidth="12"
      strokeLinecap="round"
    />

    {/* Branches */}
    <path d="M150 260 C110 230 90 210 70 190" className="tree-branch" />
    <path d="M150 250 C190 220 215 205 235 185" className="tree-branch" />
    <path d="M150 220 C115 190 100 175 85 160" className="tree-branch" />
    <path d="M150 210 C190 180 210 165 225 150" className="tree-branch" />

    {/* Leaves */}
    {[
      [70,190],[90,170],[110,200],
      [230,180],[210,160],[195,200],
      [100,150],[200,140]
    ].map(([x,y],i)=>(
      <ellipse
        key={i}
        cx={x}
        cy={y}
        rx="10"
        ry="6"
        className="tree-leaf"
      />
    ))}
  </svg>
);


const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Find Nearby Centers",
      description: "Locate recycling centers near you with our interactive map"
    },
    {
      icon: Recycle,
      title: "Material Guide",
      description: "Learn how to properly prepare different materials for recycling"
    },
    {
      icon: Leaf,
      title: "Real-time Navigation",
      description: "Get turn-by-turn directions to your chosen recycling center"
    }
  ];

  const materials = ["Plastic", "Paper", "Glass", "Metal", "E-waste"];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <style>{`
@keyframes leaf {
  0% {
    transform: translateY(110vh) rotate(0deg);
    opacity: 0;
  }
  10% { opacity: 1; }
  100% {
    transform: translateY(-120vh) rotate(360deg);
    opacity: 0;
  }
}

.animate-leaf {
  animation-name: leaf;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.tree-grow {
  transform-origin: bottom center;
  animation: treeScale 2s ease-out forwards;
}

.tree-trunk {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: drawTrunk 2s ease forwards;
}

.tree-branch {
  fill: none;
  stroke: #166534;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawBranch 1.5s ease forwards;
  animation-delay: 1.2s;
}

.tree-leaf {
  fill: #16a34a;
  opacity: 0;
  transform-origin: center;
  animation: leafPop 0.6s ease forwards;
  animation-delay: 2.4s;
}

@keyframes drawTrunk {
  to { stroke-dashoffset: 0; }
}

@keyframes drawBranch {
  to { stroke-dashoffset: 0; }
}

@keyframes leafPop {
  from { opacity:0; transform:scale(0); }
  to { opacity:1; transform:scale(1); }
}

@keyframes treeScale {
  from { transform:translateX(-50%) scale(0.7); }
  to { transform:translateX(-50%) scale(1); }
}


`}</style>

<FloatingLeaves />

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Recycle className="w-8 h-8" />
            <h1 className="text-2xl font-bold">RecyLyTix</h1>
          </div>
          <Link to="/map">
            <Button variant="secondary" className="gap-2">
              Open Map <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* main  */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/20 py-20 px-6">
        <AnimatedTree />

<div className="relative z-30 max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Recycling Made Easy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Recycling Centers & Learn Proper Disposal
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            RecyLyTix helps you locate nearby recycling centers, navigate to them in real-time, 
            and learn how to properly prepare materials for recycling.
          </p>
          <Link to="/map">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              <MapPin className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="min-h-screen flex items-center py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            How RecyLyTix Helps You
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
               className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow float"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials We Cover */}
      <section className="py-16 px-6">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"/>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"/>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Materials We Cover
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {materials.map((material) => (
              <div 
                key={material}
                className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{material}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            Each material comes with detailed preparation steps to ensure proper recycling.
          </p>
        </div>
      </section>

      {/* CTA */}
  <section className="min-h-screen flex items-center py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Recycling Right?
          </h3>
          <p className="text-primary-foreground/80 mb-8">
            Open the map to find recycling centers near you and get started today.
          </p>
          <Link to="/map">
            <Button size="lg" variant="secondary" className="gap-2 animate-pulse">
              <MapPin className="w-5 h-5" />
              Open Recycling Map
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Recycle className="w-4 h-4" />
            RecyLyTix – CSE Mini Project 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
