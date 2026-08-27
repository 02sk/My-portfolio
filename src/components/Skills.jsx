import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: FaCss3Alt,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
  },
  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: SiGithub,
  },
];

const colors = {
  React: "#61DAFB",
  "JavaScript": "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#264DE4",
  "Tailwind CSS": "#38BDF8",
  "Node.js": "#83CD29",
  "Express.js": "#000000",
  MongoDB: "#47A248",
  Git: "#F1502F",
  GitHub: "#181717",
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-10 bg-[#d9d9d9] px-4 py-20 sm:px-6 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex items-center gap-4">
          <span className="font-mono text-sm text-gray-500">02</span>

          <span className="h-px w-12 bg-black" />

          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            Skills
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <h2 className="text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Tools I use
            <br />
            to build
            <br />
            <span className="text-gray-400">things.</span>
          </h2>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              A growing toolkit built around modern JavaScript development,
              clean architecture and practical problem solving.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="pt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              const color = colors[skill.name] || "#999999";
              const isDarkText = skill.name === "JavaScript";

              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 rounded-lg bg-white/60 p-4 text-center shadow-sm transition hover:translate-y-1"
                >
                  <div
                    className="flex items-center justify-center h-14 w-14 rounded-full"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={28} className={isDarkText ? "text-black" : "text-white"} />
                  </div>

                  <div className="text-sm font-semibold">{skill.name}</div>
                  <div className="text-xs text-gray-500">{skill.category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
