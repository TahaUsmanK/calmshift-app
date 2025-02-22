import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, CheckCircle2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col">
        {/* Navigation */}
        <header className="absolute left-0 right-0 top-0 z-10 border-b bg-background/50 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">CalmShift</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Journey to Digital Wellness Starts Here
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Break free from digital distractions and build healthier tech habits with CalmShift's science-backed
              approach.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/auth/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-muted py-20">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose CalmShift?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-card border bg-background p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Transform Your Digital Life</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary py-20 text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Take Control?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Join thousands of users who have already transformed their relationship with technology. Start your journey
            today.
          </p>
          <Button size="lg" variant="secondary" className="h-12 bg-white px-8 text-primary hover:bg-white/90" asChild>
            <Link href="/auth/register">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-semibold">CalmShift</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Smart Detox Sessions",
    description: "Customize and track your digital detox sessions with intelligent reminders and progress tracking.",
    icon: Timer,
  },
  {
    title: "Mindfulness Library",
    description: "Access a curated collection of mindfulness exercises and activities to help you stay present.",
    icon: Leaf,
  },
  {
    title: "Achievement System",
    description:
      "Stay motivated with our gamified approach to digital wellness, earning points and unlocking achievements.",
    icon: Trophy,
  },
]

const benefits = [
  {
    title: "Improved Focus & Productivity",
    description: "Reduce digital distractions and enhance your ability to concentrate on what truly matters.",
  },
  {
    title: "Better Sleep Quality",
    description: "Develop healthier screen time habits and improve your sleep patterns naturally.",
  },
  {
    title: "Reduced Stress & Anxiety",
    description: "Break free from the constant connectivity and find more peace in your daily life.",
  },
  {
    title: "Stronger Relationships",
    description: "Be more present in your interactions and build deeper connections with those around you.",
  },
]

import { Timer, Trophy } from "lucide-react"

