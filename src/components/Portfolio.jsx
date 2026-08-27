import { ArrowUpRight } from "lucide-react"

import { FaGithub } from "react-icons/fa"
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si"

const projects = [
  {
    number: "01",
    title: "Employee Management System",
    description:
      "A complete MERN employee management platform with JWT authentication, employee CRUD, attendance tracking, late detection and administrative settings.",
    image: "/projects/employee-system.png",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "AI Integrated Application",
    description:
      "An intelligent web application integrating AI functionality with a modern frontend and backend architecture.",
    image: "/projects/ai-project.png",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    github: "#",
    live: "#",
  },
]

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-10 bg-black px-4 py-20 text-white sm:px-6 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-20 flex items-center gap-4">

          <span className="font-mono text-sm text-gray-600">
            03
          </span>

          <span className="h-px w-12 bg-white" />

          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            Selected Work
          </span>

        </div>

        <h2 className="mb-16 max-w-4xl text-4xl font-bold leading-none tracking-tight md:text-6xl xl:text-7xl">
          Things I've
          <br />
          <span className="text-gray-600">
            built.
          </span>
        </h2>

        <div className="space-y-16 md:space-y-20">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group"
            >

              <div className="mb-8 flex items-center justify-between">

                <span className="font-mono text-sm text-gray-600">
                  {project.number}
                </span>

                <span className="text-sm uppercase tracking-widest text-gray-600">
                  Full Stack
                </span>

              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-2xl bg-[#111]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

              </div>

              {/* Information */}
              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto]">

                <div>

                  <h3 className="text-2xl font-bold md:text-4xl xl:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 md:leading-8">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-7 flex flex-wrap gap-5">

                    {project.technologies.map((tech) => {
                      const Icon = tech.icon

                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <Icon size={20} />
                          {tech.name}
                        </div>
                      )
                    })}

                  </div>

                </div>

                {/* Links */}
                <div className="flex items-start gap-3 lg:pt-2">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-300"
                  >
                    Live Demo

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Portfolio