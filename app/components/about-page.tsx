import Image from "next/image"
import {
  MessageSquare,
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
} from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: MessageSquare,
    label: "DISCOVER",
    description: "Understanding requirements",
  },
  {
    icon: Lightbulb,
    label: "IDEA",
    description: "Brainstorming solutions",
  },
  {
    icon: Palette,
    label: "DESIGN",
    description: "Creating user interfaces",
  },
  {
    icon: Code,
    label: "DEVELOP",
    description: "Building the application",
  },
  {
    icon: TestTube,
    label: "TEST",
    description: "Quality assurance",
  },
  {
    icon: Rocket,
    label: "LAUNCH",
    description: "Deployment & delivery",
  },
]


export default function AboutPage() {
  return (
    <div className="relative bg-zinc-900 h-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white h-full overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-400">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Hello! I'm a passionate Full Stack Developer and DevOps Engineer who builds cloud-native web applications that scale. I specialize in React, Next.js, Node.js, and Java Spring Boot — with deep experience in CI/CD, containerization, and cloud platforms like AWS and Azure.

            </p>

            <p className="text-lg mb-6">
              Over the past 5+ years, I’ve built solutions ranging from internal tools to enterprise platforms, always prioritizing clean architecture, automation, and a great user experience.

            </p>

            <p className="text-lg mb-6">
              Outside of work, I enjoy hiking, science fiction, and exploring emerging technologies like AI, observability, and cloud security. I thrive in continuous learning environments and love solving meaningful engineering challenges.

            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Java",
                "Spring Boot",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "Tailwind CSS",
                "Git",
                "Docker",
                "AWS"
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-zinc-800 text-emerald-400 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-10 text-center text-white">
                My Development Process
              </h2>

              <div className="hidden lg:flex justify-center items-start gap-6 max-w-6xl mx-auto">
                {steps.map((step, index, arr) => (
                  <div key={step.label} className="flex flex-col items-center relative w-[100px]">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3">
                      <step.icon size={32} className="text-zinc-700" />
                    </div>
                    <h3 className="font-bold text-sm text-emerald-400 mb-1">{step.label}</h3>
                    <p className="text-xs text-zinc-400 text-center">{step.description}</p>

                    {/* Connector */}
                    {index !== arr.length - 1 && (
                      <div className="absolute top-10 right-[-60px] w-[60px] h-1 bg-gradient-to-r from-zinc-600 to-zinc-500">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-zinc-500 rounded-full"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile view (stacked grid) */}
              <div className="lg:hidden grid grid-cols-2 gap-6 max-w-md mx-auto mt-10">
                {steps.map((step) => (
                  <div key={step.label} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2">
                      <step.icon size={24} className="text-zinc-700" />
                    </div>
                    <h3 className="font-bold text-sm text-emerald-400 mb-1">{step.label}</h3>
                    <p className="text-xs text-zinc-400 text-center">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>


          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-zinc-700 shadow-lg mx-auto"
            >
              <Image
                src="/Assets/radar.png"
                alt="Tech Stack Radar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
