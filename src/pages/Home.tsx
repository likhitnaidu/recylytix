import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Recycle,
  ArrowRight,
  Leaf,
  MapPin,
  CheckCircle
} from "lucide-react"

const FloatingLeaves = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {[...Array(12)].map((_, i) => (
      <Leaf
        key={i}
        className="absolute text-green-400/40 animate-leaf"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 1.5}s`,
          fontSize: `${16 + Math.random() * 20}px`
        }}
      />
    ))}
  </div>
)

export default function Home({ features, materials }) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">

      {/* Inline animations */}
      <style>{`
        @keyframes leaf {
          0% { transform: translateY(100vh) rotate(0deg); opacity:0 }
          10% { opacity:1 }
          100% { transform: translateY(-120vh) rotate(360deg); opacity:0 }
        }
        .animate-leaf {
          animation: leaf 20s linear infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
        }
        .float { animation: float 6s ease-in-out infinite }

        @keyframes fadeUp {
          from { opacity:0; transform: translateY(30px) }
          to { opacity:1; transform: translateY(0) }
        }
        .fade-up { animation: fadeUp 1s ease forwards }
      `}</style>

      <FloatingLeaves />

      {/* Header */}
      <header className="relative z-10 bg-primary text-primary-foreground py-4 px-6 shadow-md">
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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/20 px-6">
        <div className="max-w-4xl mx-auto text-center fade-up relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            Recycling Made Easy
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Find Recycling Centers & Learn Proper Disposal
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Locate nearby recycling centers, navigate in real-time,
            and prepare materials correctly.
          </p>

          <Link to="/map">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              <MapPin className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="min-h-screen flex items-center py-16 px-6 bg-muted/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            How RecyLyTix Helps You
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm float">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
                <p className="text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="min-h-screen flex items-center py-16 px-6 relative">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"/>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"/>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl font-bold mb-8">Materials We Cover</h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {materials.map((m) => (
              <div key={m} className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full float">
                <CheckCircle className="w-4 h-4 text-primary" />
                {m}
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            Each material includes preparation guidance and safety rules.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex items-center py-16 px-6 bg-primary text-primary-foreground relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Start Recycling Right?
          </h3>

          <p className="opacity-80 mb-8">
            Open the map and take action today.
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
      <footer className="bg-muted py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Recycle className="w-4 h-4" />
            RecyLyTix – CSE Mini Project 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Home;
