"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, ArrowLeft } from "lucide-react"

export default function Help() {
  const router = useRouter()

  return (
    <div className="container p-4 md:p-6">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" className="mr-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Help & Support</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Search Help Articles</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search help articles..." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I start a detox session?</AccordionTrigger>
                <AccordionContent>
                  To start a detox session, navigate to the Detox tab and click on "Start New Session". You can
                  customize the duration and theme of your session before beginning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How are points calculated?</AccordionTrigger>
                <AccordionContent>
                  Points are earned through completing detox sessions, achieving daily goals, and maintaining streaks.
                  Each minute of detox time earns you 1 point, with bonus points for completing challenges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize notifications?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can customize all notifications in the Settings menu under "Notifications". You can set
                  specific times for reminders and choose which types of notifications you want to receive.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need More Help?</CardTitle>
            <CardDescription>Get in touch with our support team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our support team is available Monday through Friday, 9am-5pm PST.
            </p>
            <Button className="w-full sm:w-auto">Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

