import {
  ArrowUpRight,
  Mail,
} from "lucide-react"

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-10 bg-[#d9d9d9] px-4 py-20 sm:px-6 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-20 flex items-center gap-4">

          <span className="font-mono text-sm text-gray-500">
            04
          </span>

          <span className="h-px w-12 bg-black" />

          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            Contact
          </span>

        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold leading-[0.9] tracking-tight md:text-6xl xl:text-7xl">
              LET'S
              <br />
              BUILD
              <br />
              <span className="text-gray-500">
                TOGETHER.
              </span>
            </h2>

          </div>

          <div className="flex flex-col justify-end">

            <p className="max-w-xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Have a project, opportunity or idea you'd like
              to discuss? Feel free to reach out.
            </p>

            <a
              href="mailto:anandrajgcet91@gmail.com"
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-black pb-3 text-lg font-semibold"
            >
              anandrajgcet91@gmail.com

              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-12 flex gap-3">

              <a
                href="https://github.com/02sk"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:-translate-y-1"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/anand-raj-164649383"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:-translate-y-1"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href="mailto:anandrajgcet91@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:-translate-y-1"
              >
                <Mail size={19} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact