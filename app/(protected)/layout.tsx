import type React from "react"
import { Navigation } from "@/components/navigation"
import { MobileNav } from "@/components/mobile-nav"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Navigation className="hidden md:flex" />
      <main className="flex-1 overflow-auto pb-16 md:pb-0">{children}</main>
      <MobileNav className="fixed bottom-0 left-0 right-0 md:hidden" />
    </div>
  )
}

