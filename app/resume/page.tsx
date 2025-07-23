import { Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-400">Resume</h1>
        <Link
          href="#"
          className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-emerald-500 text-zinc-900 rounded-lg hover:bg-emerald-400 transition-colors"
        >
          <Download size={18} />
          Download PDF
        </Link>
      </div>

      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Experience</h2>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-emerald-400">Senior Frontend Developer</h3>
              <span className="text-zinc-400">Jan 2021 - Present</span>
            </div>
            <h4 className="text-lg mb-2">Tech Innovations Inc.</h4>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Led the development of the company's flagship SaaS product using React and Next.js</li>
              <li>Improved application performance by 40% through code optimization and lazy loading</li>
              <li>Mentored junior developers and conducted code reviews to maintain code quality</li>
              <li>Collaborated with design and product teams to implement new features and improve UX</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-emerald-400">Full Stack Developer</h3>
              <span className="text-zinc-400">Mar 2018 - Dec 2020</span>
            </div>
            <h4 className="text-lg mb-2">WebSolutions Co.</h4>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Developed and maintained multiple client websites and web applications</li>
              <li>Built RESTful APIs using Node.js and Express</li>
              <li>Implemented authentication systems and integrated third-party services</li>
              <li>Worked in an agile team environment with daily stand-ups and sprint planning</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Education</h2>

          <div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-emerald-400">Bachelor of Science in Computer Science</h3>
              <span className="text-zinc-400">2014 - 2018</span>
            </div>
            <h4 className="text-lg">University of Technology</h4>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-zinc-700">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>JavaScript (ES6+), TypeScript</li>
                <li>React, Next.js, Redux</li>
                <li>HTML5, CSS3, Sass</li>
                <li>Tailwind CSS, Material UI</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Backend</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Node.js, Express</li>
                <li>MongoDB, PostgreSQL</li>
                <li>GraphQL, REST APIs</li>
                <li>Authentication & Authorization</li>
                <li>Serverless Functions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Tools & Others</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Git, GitHub, GitLab</li>
                <li>Docker, CI/CD</li>
                <li>AWS, Vercel, Netlify</li>
                <li>Jest, React Testing Library</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Soft Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
