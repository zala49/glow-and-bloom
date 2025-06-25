import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Glow & Bloom - Your Beauty Sanctuary",
  description: "Discover a world of beauty, relaxation, and personalized care designed just for you.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
