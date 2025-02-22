"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, Search, ArrowLeft } from "lucide-react"

export default function Mindfulness() {
  const router = useRouter()

  return (
    <div className="container p-4 md:p-6">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" className="mr-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Mindfulness Library</h1>
      </div>

      <Tabs defaultValue="exercises" className="space-y-6">
        <TabsList>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="activities">Offline Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="exercises">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search exercises..." />
              </div>
              <Button variant="outline">Filter</Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video bg-hover" />
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">5-Minute Breathing Exercise</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      A quick mindfulness session to help you refocus and find calm.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Start Exercise
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="activities">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Activity Suggestion</CardTitle>
                <CardDescription>Try something new away from screens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-button bg-hover p-6">
                  <h3 className="mb-2 text-lg font-semibold">Nature Walk</h3>
                  <p className="mb-4 text-muted-foreground">
                    Take a 30-minute walk in nature. Notice the sounds, smells, and sights around you.
                  </p>
                  <Button>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Log Activity
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 w-fit">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">Reading Session</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Spend 30 minutes reading a physical book of your choice.
                    </p>
                    <Button variant="outline" className="w-full">
                      Start Activity
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

