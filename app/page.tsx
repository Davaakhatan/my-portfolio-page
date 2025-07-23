"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import AboutPage from "./components/about-page"
import ProjectsPage from "./components/projects-page"
import ResumePage from "./components/resume-page"
import ContactPage from "./components/contact-page"

const pages = ["home", "about", "projects", "resume", "contact"]

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigateToPage = (page: string) => {
    if (isTransitioning || page === currentPage) return

    setIsTransitioning(true)

    // Add a small delay to show the transition effect
    setTimeout(() => {
      setCurrentPage(page)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 150)
  }

  const getPageIndex = (page: string) => pages.indexOf(page)
  const getCurrentIndex = () => getPageIndex(currentPage)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 bg-zinc-900 text-white p-8 flex flex-col relative z-20">
        <div className="mb-10 text-center lg:text-left">
          <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-4 overflow-hidden rounded-full border-4 border-emerald-500">
            <Image src="/Assets/profile.jpg" alt="Davaakhatan (Dave) Zorigtbaatar" fill className="object-cover" priority />
          </div>
          <h2 className="text-2xl font-bold">Davaakhatan (Dave) Zorigtbaatar</h2>
          <p className="text-emerald-400 mt-1 leading-tight text-sm">
            Full Stack Developer<br />
            DevOps Engineer
          </p>

        </div>

        <nav className="mb-10">
          <ul className="space-y-4">
            {pages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => navigateToPage(page)}
                  disabled={isTransitioning}
                  className={`w-full text-left flex items-center py-2 px-4 rounded-lg transition-all duration-300 ${currentPage === page
                    ? "bg-emerald-500 text-zinc-900 font-medium transform scale-105"
                    : "hover:bg-zinc-800 hover:transform hover:scale-102"
                    } ${isTransitioning ? "opacity-50" : ""}`}
                >
                  {page === "home"
                    ? "Home"
                    : page === "about"
                      ? "About Me"
                      : page === "projects"
                        ? "Projects"
                        : page === "resume"
                          ? "Resume"
                          : "Contact"}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link href="https://github.com/davaakhatan" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/davaakhatan" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:zr.davaa@gmail.com"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <FileText size={20} />
              <span className="sr-only">Resume</span>
            </Link>
          </div>
          <p className="text-zinc-500 text-sm mt-6 text-center lg:text-left">© {new Date().getFullYear()} Your Name</p>
        </div>

        {/* Page indicators */}
        <div className="flex lg:flex-col justify-center lg:justify-start space-x-2 lg:space-x-0 lg:space-y-2 mt-4 lg:mt-0 lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          {pages.map((page, index) => (
            <button
              key={page}
              onClick={() => navigateToPage(page)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === page ? "bg-emerald-400 scale-150" : "bg-zinc-600 hover:bg-zinc-500"
                }`}
              aria-label={`Go to ${page} page`}
            />
          ))}
        </div>
      </aside>

      {/* Main Content with Smooth Transitions */}
      <main className="flex-1 relative overflow-hidden">
        <div
          className="relative w-full h-full"
          style={{
            transform: `translateY(-${getCurrentIndex() * 100}vh)`,
            transition: isTransitioning ? "transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)" : "none",
          }}
        >
          {/* Home Page */}
          <div className="h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-emerald-400">Hi, I'm</span><br />
                Davaakhatan <span className="text-zinc-400">(Dave)</span> Zorigtbaatar
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-10">
                Full Stack Developer building cloud-native apps with DevOps, performance, and scale in mind.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateToPage("projects")}
                  className="px-8 py-3 bg-emerald-500 text-zinc-900 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => navigateToPage("contact")}
                  className="px-8 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* About Page */}
          <div className="h-screen">
            <AboutPage />
          </div>

          {/* Projects Page */}
          <div className="h-screen">
            <ProjectsPage />
          </div>

          {/* Resume Page */}
          <div className="h-screen">
            <ResumePage />
          </div>

          {/* Contact Page */}
          <div className="h-screen">
            <ContactPage />
          </div>
        </div>

        {/* Transition Overlay */}
        {isTransitioning && (
          <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </main>
    </div>
  )
}
