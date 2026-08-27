import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react"

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

import Navbar from "./Navbar"
import profileImage from "../assets/profile.png"

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#d9d9d9]">

      {/* Black diagonal section */}
      <div
        className="
          absolute inset-0
          bg-black
          [clip-path:polygon(52%_0,100%_0,100%_100%,42%_100%)]
          md:[clip-path:polygon(54%_0,100%_0,100%_100%,40%_100%)]
        "
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        <div className="max-w-xl pt-20 md:pt-24 lg:max-w-[32rem]">

          {/* Status */}
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gray-600">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>

            AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Greeting */}
          <p className="mb-5 text-2xl font-medium md:text-3xl">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="font-[Space_Grotesk] text-[clamp(3.1rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em]">
            ANAND
            <br />
            SINGH<span className="text-gray-500">.</span>
          </h1>

          {/* Role */}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm md:text-base">
            <span className="font-semibold text-black">
              Full Stack Developer
            </span>

            <span className="text-gray-400">
              •
            </span>

            <span className="text-gray-500">
              MERN Stack
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
            I build modern web applications with React, Node.js,
            Express and MongoDB, turning ideas into useful digital
            products.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 sm:px-6"
            >
              VIEW MY WORK

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/src/assets/anandResume.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-full border border-black px-5 py-3 text-sm font-bold text-black transition duration-300 hover:bg-black hover:text-white sm:px-6"
            >
              RESUME

              <Download size={17} />
            </a>

          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">

            <a
              href="https://github.com/02sk"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/anand-raj-164649383"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:anandrajgcet91@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Mail size={19} />
            </a>

          </div>

        </div>
      </div>

      {/* Profile + Scroll */}
      <div className="absolute right-[10%] top-1/2 z-10 hidden -translate-y-1/2 lg:block">

        <div className="relative">

          {/* Profile image */}
          <div className="h-[320px] w-[320px] overflow-hidden rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:h-[380px] md:w-[380px] xl:h-[440px] xl:w-[440px]">

            <img
              src={profileImage}
              alt="Anand Singh"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Scroll */}
          <a
            href="#about"
            className="absolute -bottom-35 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          >
            SCROLL
            <ArrowDown size={12} />
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero