// Move the existing dashboard code from app/page.tsx to here
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Timer, BookOpen, Leaf, Trophy, TrendingUp, Clock } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Your digital wellness journey continues</p>
      </div>

      <div className="grid gap-6">
        {/* Daily Progress */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Today&apos;s Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Screen-free time: 4h 30m</span>
                <span>Goal: 6h</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-button bg-hover p-4">
                <Clock className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">Screen Time</div>
                <div className="text-2xl font-bold">2h 15m</div>
              </div>
              <div className="rounded-button bg-hover p-4">
                <TrendingUp className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">Streak</div>
                <div className="text-2xl font-bold">7 days</div>
              </div>
              <div className="rounded-button bg-hover p-4">
                <Trophy className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">Points</div>
                <div className="text-2xl font-bold">450</div>
              </div>
              <div className="rounded-button bg-hover p-4">
                <Leaf className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">Mindful Min</div>
                <div className="text-2xl font-bold">45m</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <Button className="w-full" size="lg">
                <Timer className="mr-2 h-5 w-5" />
                Start Detox Session
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <Button className="w-full" variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Log Offline Activity
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <Button className="w-full" variant="outline" size="lg">
                <Leaf className="mr-2 h-5 w-5" />
                Mindfulness Exercise
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 rounded-button bg-hover p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Timer className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">2-Hour Detox Session</div>
                    <div className="text-sm text-muted-foreground">Completed successfully</div>
                  </div>
                  <div className="text-sm text-muted-foreground">2h ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

