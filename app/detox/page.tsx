"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timer, Pause, X, Play, ArrowLeft } from "lucide-react"

export default function DetoxSession() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="container p-4 md:p-6">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" className="mr-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Detox Session</h1>
      </div>

      <Tabs defaultValue="new" className="space-y-6">
        <TabsList>
          <TabsTrigger value="new">New Session</TabsTrigger>
          <TabsTrigger value="history">Session History</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-6">
          {!isActive ? (
            <Card>
              <CardHeader>
                <CardTitle>Start a New Session</CardTitle>
                <CardDescription>Choose your session duration and theme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration</label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme</label>
                  <Select defaultValue="nature">
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nature">Nature Sounds</SelectItem>
                      <SelectItem value="ocean">Ocean Waves</SelectItem>
                      <SelectItem value="forest">Forest Ambience</SelectItem>
                      <SelectItem value="rain">Rainfall</SelectItem>
                      <SelectItem value="silence">Silent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" size="lg" onClick={() => setIsActive(true)}>
                  <Timer className="mr-2 h-5 w-5" />
                  Start Session
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-6">
                  <div className="text-6xl font-bold">30:00</div>
                  <div className="space-x-2">
                    {!isPaused ? (
                      <Button variant="outline" size="lg" onClick={() => setIsPaused(true)}>
                        <Pause className="mr-2 h-5 w-5" />
                        Pause
                      </Button>
                    ) : (
                      <Button variant="outline" size="lg" onClick={() => setIsPaused(false)}>
                        <Play className="mr-2 h-5 w-5" />
                        Resume
                      </Button>
                    )}
                    <Button
                      variant="destructive"
                      size="lg"
                      onClick={() => {
                        setIsActive(false)
                        setIsPaused(false)
                      }}
                    >
                      <X className="mr-2 h-5 w-5" />
                      End Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Session History</CardTitle>
              <CardDescription>Your recent detox sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between rounded-button border p-4">
                    <div>
                      <div className="font-medium">30 Minute Session</div>
                      <div className="text-sm text-muted-foreground">Nature Sounds Theme</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">Completed</div>
                      <div className="text-sm text-muted-foreground">2 hours ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

