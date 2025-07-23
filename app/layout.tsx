import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Davaakhatan (Dave) Zorigtbaatar | Full Stack Developer Portfolio",
  description: "Portfolio of Davaakhatan Zorigtbaatar — showcasing full stack development, DevOps, and cloud engineering projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-900 min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
