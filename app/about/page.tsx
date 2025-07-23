import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-400">About Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Hello! I'm a passionate Full Stack Developer with expertise in building modern web applications. I
            specialize in React, Next.js, Node.js, and various other technologies that power the modern web.
          </p>

          <p className="text-lg mb-6">
            With over 5 years of experience in the industry, I've worked on a wide range of projects from small business
            websites to large-scale enterprise applications. I'm dedicated to writing clean, efficient code and creating
            intuitive user experiences.
          </p>

          <p className="text-lg mb-6">
            When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting with
            new technologies. I'm always looking to learn and grow as a developer.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">My Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "GraphQL",
              "Tailwind CSS",
              "Git",
              "Docker",
              "AWS",
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-zinc-800 text-emerald-400 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=600" alt="About me" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
