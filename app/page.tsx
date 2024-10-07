"use client"

import { useEffect } from "react"
import Link from "next/link"
import Home from "@/pages/Home"
import { Grid, defineHex, rectangle } from "honeycomb-grid"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import HoneycombBackground from "@/components/background"

export default function IndexPage() {
  return (
    // <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    //   {/* <div className="flex max-w-[980px] flex-col items-start gap-2"></div>
    //   <div className="flex gap-4"></div> */}
    // </section>

    <div className="absolute top-0 w-screen h-screen overflow-auto">
      <Home />
    </div>
  )
}
