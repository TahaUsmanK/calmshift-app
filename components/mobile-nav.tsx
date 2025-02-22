import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Timer, BarChart2, Leaf, User } from "lucide-react"

export function MobileNav({ className }: { className?: string }) {
  return (
    <div className={cn("bg-surface border-t py-2", className)}>
      <nav className="flex justify-around">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/detox">
            <Timer className="h-5 w-5" />
            <span className="sr-only">Detox Sessions</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/analytics">
            <BarChart2 className="h-5 w-5" />
            <span className="sr-only">Analytics</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/mindfulness">
            <Leaf className="h-5 w-5" />
            <span className="sr-only">Mindfulness</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/profile">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Link>
        </Button>
      </nav>
    </div>
  )
}

