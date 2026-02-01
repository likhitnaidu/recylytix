import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useEffect, useRef } from "react";
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
const TreeAnimation = ({ side = "left" }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll(".draw");
    paths.forEach((p, i) => {
      const length = p.getTotalLength();
      p.style.strokeDasharray = length;
      p.style.strokeDashoffset = length;
      p.style.animation = `drawPath 2s ease-out forwards ${i * 0.4}s`;
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 520"
      className={`absolute bottom-0 hidden md:block w-[300px] md:w-[380px] opacity-50 pointer-events-none tree-wind
        ${side === "left" ? "left-6" : "right-6 scale-x-[-1]"}`}
    >
      <path
        className="draw"
        d="M150 520 C145 400 145 300 150 200 C155 300 155 400 150 520"
        stroke="#14532d"
        strokeWidth="10"
        fill="none"
      />
<path className="draw tree-branch" d="M150 300 C110 260 90 235 70 210" />
<path className="draw tree-branch" d="M150 290 C190 250 215 230 235 210" />
<path className="draw tree-branch" d="M150 250 C115 215 100 200 85 180" />
<path className="draw tree-branch" d="M150 235 C190 200 210 185 225 170" />

{[
  [70,210],[90,190],[110,220],[130,200],
  [230,200],[210,180],[195,220],[175,200],
  [100,170],[120,160],[180,155],[200,165],
  [140,180],[160,170],[150,150],[165,190]
].map(([x,y],i)=>(
  <ellipse
    key={i}
    cx={x}
    cy={y}
    rx="12"
    ry="7"
    className="tree-leaf"
    style={{ animationDelay: `${2 + i * 0.15}s` }}
  />
))}

    </svg>
  );
};




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
@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}
.tree-branch {
  fill: none;
  stroke: #166534;
  stroke-width: 6;
  stroke-linecap: round;
}

.tree-leaf {
  fill: #16a34a;
  opacity: 0;
  transform-origin: center;
  animation: leafPop 0.6s ease forwards;
}
@keyframes leafPop {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}

.tree-wind {
  transform-origin: bottom center;
  animation: wind 6s ease-in-out infinite;
}

@keyframes wind {
  0%,100% { transform: rotate(0deg); }
  50% { transform: rotate(1.5deg); }
}
.tree-branch {
  animation: branchMove 4s ease-in-out infinite alternate;
}

@keyframes branchMove {
  from { transform: rotate(0deg); }
  to { transform: rotate(1deg); }
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
     
<TreeAnimation side="left" />
  <TreeAnimation side="right" />

<div className="relative z-20 max-w-4xl mx-auto text-center">

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
