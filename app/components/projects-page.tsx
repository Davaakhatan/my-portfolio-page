import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { log } from "console"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Kafka & Zookeeper Automation",
      description:
        "Automated Kafka and Zookeeper provisioning using vRA and custom scripts at Khan Bank, enabling scalable and resilient microservice architecture.",
      image: "/Assets/kafkaproject.png",
      tags: ["Terraform", "vRA", "Kafka", "Zookeeper", "CI/CD", "Ansible"],
      logo: "/Assets/nkhanbank-logo.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 2,
      title: "Microservice Migration for Core Banking",
      description:
        "Led migration of OCH and LOS systems to microservices. Integrated ELK stack and Helm-based observability with Prometheus and Grafana.",
      image: "/Assets/microservices.png",
      tags: ["Microservices", "Helm", "ELK Stack", "Grafana", "Prometheus", "Kubernetes"],
      logo: "/Assets/nkhanbank-logo.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 3,
      title: "DevSecOps Pipeline Integration",
      description:
        "Collaborated with security team to integrate DAST, SAST into CI/CD workflows, enhancing secure software delivery lifecycle.",
      image: "/Assets/devsecops.png",
      tags: ["DevSecOps", "DAST", "SAST", "CI/CD", "Jenkins", "GitHub Actions"],
      logo: "/Assets/Infosolution_logo.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 4,
      title: "Microsoft Azure Cloud Security Migration",
      description:
        "Migrated legacy systems to Azure cloud and hardened Microsoft 365 environments through audit and compliance policy enforcement.",
      image: "/Assets/azure.png",
      tags: ["Azure", "Terraform", "Microsoft 365", "Security Center", "Intune"],
      logo: "/Assets/Infosolution_logo.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 5,
      title: "Infrastructure as Code & Security Hardening",
      description:
        "Built secure cloud foundations using Terraform. Performed DAST/SAST audits and enforced DevSecOps standards at Infosolution LLC.",
      image: "/Assets/iac.png",
      tags: ["Terraform", "DevSecOps", "Azure Security Center", "DAST", "SAST"],
      logo: "/Assets/Infosolution_logo.png",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: 6,
      title: "AI-Powered SDLC Assistant",
      description:
        "Final capstone project using AI to generate software engineering documentation (e.g., requirements, architecture, test plans).",
      image: "/Assets/sdlc-ai.png",
      tags: ["AI", "Spring Boot", "React", "OpenAI API", "LLMs"],
      logo: "/Assets/GU_logo.jpeg",
      liveUrl: null,
      githubUrl: null,
    },
  ]

  return (
    <div className="relative bg-zinc-800 h-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white h-full overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-400">My Projects</h1>
        <p className="text-xl mb-12 max-w-3xl">
          Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>


              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zinc-600 text-emerald-400 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Logo at bottom-right */}
                {project.logo && (
                  <div className="absolute bottom-4 right-4 w-20 h-20">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <div className="flex gap-4 mt-2">
                  {project.liveUrl && project.githubUrl ? (
                    <>
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
                    </>
                  ) : (
                    <span className="text-sm text-zinc-400 italic">Internal project – not publicly available</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
