import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Timer, BarChart2, Leaf, Settings, HelpCircle, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export function Navigation({ className }: { className?: string }) {
  const { signOut } = useAuth()

  return (
    <div className={cn("w-[240px] border-r bg-surface px-4 py-6", className)}>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 px-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">CalmShift</span>
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-2">
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/detox">
              <Timer className="mr-2 h-5 w-5" />
              Detox Sessions
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/analytics">
              <BarChart2 className="mr-2 h-5 w-5" />
              Analytics
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/mindfulness">
              <Leaf className="mr-2 h-5 w-5" />
              Mindfulness
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/help">
              <HelpCircle className="mr-2 h-5 w-5" />
              Help & Support
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start text-red-500 hover:text-red-600" onClick={() => signOut()}>
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}

