import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "A mobile-responsive fitness tracking application with progress visualization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "GraphQL", "D3.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-400">My Projects</h1>
      <p className="text-xl mb-12 max-w-3xl">
        Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
          >
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-zinc-700 text-emerald-400 rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.liveUrl}
                  className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  <Github size={16} />
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
