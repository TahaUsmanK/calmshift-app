"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

export default function Setup() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="container flex min-h-screen items-center justify-center p-4">
      <Button variant="ghost" className="absolute left-4 top-4" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Card className="mx-auto w-full max-w-lg">
        <CardHeader>
          <CardTitle>Initial Setup</CardTitle>
          <CardDescription>Help us personalize your CalmShift experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label>What&apos;s your average daily screen time?</Label>
                <RadioGroup defaultValue="4-6" className="mt-2 grid gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0-3" id="0-3" />
                    <Label htmlFor="0-3">0-3 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4-6" id="4-6" />
                    <Label htmlFor="4-6">4-6 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="7-9" id="7-9" />
                    <Label htmlFor="7-9">7-9 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10+" id="10+" />
                    <Label htmlFor="10+">10+ hours</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label>Set your daily detox goal</Label>
                <Select defaultValue="2">
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                    <SelectItem value="3">3 hours</SelectItem>
                    <SelectItem value="4">4 hours</SelectItem>
                    <SelectItem value="5">5+ hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label>When would you like to receive reminders?</Label>
                <Select defaultValue="morning">
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (2 PM)</SelectItem>
                    <SelectItem value="evening">Evening (7 PM)</SelectItem>
                    <SelectItem value="custom">Custom Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button onClick={handleNext}>{step === 3 ? "Complete Setup" : "Next"}</Button>
          </div>

          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${step === i ? "bg-primary" : "bg-primary/20"}`} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

