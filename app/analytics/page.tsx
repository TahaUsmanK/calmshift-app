"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, Clock, Target, Trophy, TrendingUp } from "lucide-react"

export default function Analytics() {
  const router = useRouter()

  return (
    <div className="container p-4 md:p-6">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" className="mr-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Analytics</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Today&apos;s Screen Time</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-bold">2h 15m</div>
                    <div className="flex items-center text-sm text-red-500">
                      <ArrowUp className="h-4 w-4" />
                      15%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Weekly Goal Progress</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-bold">75%</div>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUp className="h-4 w-4" />
                      8%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Current Streak</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-bold">7 days</div>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUp className="h-4 w-4" />2 days
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Total Points</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-bold">450</div>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUp className="h-4 w-4" />
                      50
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Overview</CardTitle>
                <CardDescription>Your digital wellness progress this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full rounded-button bg-hover" />
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Most Active Times</CardTitle>
                  <CardDescription>When you typically use your devices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full rounded-button bg-hover" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>App Usage</CardTitle>
                  <CardDescription>Time spent on different applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full rounded-button bg-hover" />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Long-term Trends</CardTitle>
              <CardDescription>Your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-button bg-hover" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">Digital Detox Master</h3>
                    <p className="text-sm text-muted-foreground">Complete 10 detox sessions in a week</p>
                    <div className="mt-4 text-sm font-medium text-primary">Progress: 7/10</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

