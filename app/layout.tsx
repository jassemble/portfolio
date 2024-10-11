import "@/styles/globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import HoneycombBackground from "@/components/background"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import Home from "../pages/Home"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("overflow-hidden", fontSans.variable)}>
          <ThemeProvider attribute="class">
            <div className="flex-1">
              <HoneycombBackground />
              {children}
            </div>
            <Analytics />
            <TailwindIndicator />
          </ThemeProvider>
          <audio id="hoverSound" src="sounds/button-hover.wav" />
          <audio id="clickSound" src="sounds/button-click.wav" />
        </body>
      </html>
    </>
  )
}
