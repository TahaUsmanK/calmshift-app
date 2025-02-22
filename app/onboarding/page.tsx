"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Clock, Heart, Leaf, ArrowLeft } from "lucide-react"

const slides = [
  {
    title: "Why Detox?",
    description: "Reduce stress, improve focus, and build better offline relationships through mindful digital habits.",
    icon: Brain,
  },
  {
    title: "How It Works",
    description:
      "Track your screen time, set detox goals, and engage in mindfulness exercises to build healthy digital habits.",
    icon: Clock,
  },
  {
    title: "Community & Rewards",
    description: "Join a supportive community and earn rewards as you progress on your digital wellness journey.",
    icon: Heart,
  },
]

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      router.push("/setup")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Button variant="ghost" className="absolute left-4 top-4" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="mb-8 flex items-center gap-2">
        <Leaf className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-semibold">CalmShift</h1>
      </div>

      <Card className="mx-auto w-full max-w-lg shadow-soft">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${
                  currentSlide === index ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <slide.icon className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold">{slide.title}</h2>
                <p className="mb-8 text-muted-foreground">{slide.description}</p>
              </div>
            ))}

            <div className="flex w-full flex-col gap-4">
              <div className="flex justify-center gap-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-primary/20"}`}
                  />
                ))}
              </div>
              <Button onClick={handleNext} size="lg">
                {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
              </Button>
              {currentSlide < slides.length - 1 && (
                <Button variant="ghost" onClick={() => setCurrentSlide(slides.length - 1)}>
                  Skip
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

