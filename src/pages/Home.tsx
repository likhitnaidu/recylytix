import { Link } from "react-router-dom";
import { MapPin, Recycle, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const FloatingLeaves = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {[...Array(8)].map((_, i) => (
      <Leaf
        key={i}
        className="absolute text-green-400/30 animate-leaf"
        style={{
          left: `${(i * 12) % 100}%`,
          animationDelay: `${i * 2}s`
        }}
      />
    ))}
  </div>
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
  0% { transform: translateY(100vh); opacity:0 }
  10% { opacity:1 }
  100% { transform: translateY(-120vh); opacity:0 }
}
.animate-leaf {
  animation: leaf 18s linear infinite;
}
.float {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%,100% { transform: translateY(0) }
  50% { transform: translateY(-8px) }
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
