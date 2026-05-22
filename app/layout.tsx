import type { Metadata, Viewport } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono"
})

export const metadata: Metadata = {
  title: "Udit Ganguly | Aerospace AI Researcher",
  description: "Aerospace AI researcher specializing in satellite IoT systems, machine learning, and space technology. IEEE published researcher and conference speaker.",
  keywords: ["aerospace", "AI", "satellite IoT", "machine learning", "IEEE", "research", "space technology"],
  authors: [{ name: "Udit Ganguly" }],
  openGraph: {
    title: "Udit Ganguly | Aerospace AI Researcher",
    description: "Aerospace AI researcher specializing in satellite IoT systems, machine learning, and space technology.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0c10",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
