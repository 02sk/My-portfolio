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
import resume from "../assets/anandResume.pdf"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#d9d9d9]"
    >
      {/* ================= DESKTOP BLACK AREA ================= */}
      <div
        className="
          absolute inset-0 hidden bg-black lg:block
          [clip-path:polygon(54%_0,100%_0,100%_100%,40%_100%)]
        "
      />

      {/* ================= MOBILE BLACK AREA ================= */}
      <div
        className="
          absolute left-0 top-0
          h-[56%] w-full
          bg-black
          lg:hidden
        "
      />

      <Navbar />

      {/* ================= MOBILE IMAGE ================= */}
      <div
        className="
          absolute left-1/2 top-[100px]
          z-10 -translate-x-1/2
          lg:hidden
        "
      >
        <div
          className="
            h-[240px] w-[240px]
            overflow-hidden rounded-full
            sm:h-[280px] sm:w-[280px]
          "
        >
          <img
            src={profileImage}
            alt="Anand Singh"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* ================= MOBILE DIAGONAL ================= */}
      <div
        className="
          absolute left-0 top-[50%]
          z-[5] h-[100px] w-full
          bg-[#d9d9d9]
          lg:hidden
          [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]
        "
      />

      {/* ================= DESKTOP CONTENT ================= */}
      <div
        className="
          relative z-10 mx-auto hidden
          min-h-screen w-full max-w-[1600px]
          items-center
          px-4 sm:px-6 md:px-10
          lg:flex lg:px-16
          xl:px-20
        "
      >
        <div className="max-w-xl pt-20 lg:max-w-[32rem]">

          <div
            className="
              mb-8 flex items-center gap-3
              text-xs font-semibold
              tracking-[0.2em] text-gray-600
            "
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>

            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="mb-5 text-2xl font-medium md:text-3xl">
            Hi, I'm
          </p>

          <h1
            className="
              font-[Space_Grotesk]
              text-[clamp(3.1rem,7vw,7rem)]
              font-bold
              leading-[0.9]
              tracking-[-0.06em]
            "
          >
            ANAND
            <br />
            SINGH<span className="text-gray-500">.</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm md:text-base">
            <span className="font-semibold">
              Full Stack Developer
            </span>

            <span className="text-gray-400">•</span>

            <span className="text-gray-500">
              MERN Stack
            </span>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
            I build modern web applications with React, Node.js,
            Express and MongoDB, turning ideas into useful digital
            products.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#portfolio"
              className="
                group inline-flex items-center gap-3
                rounded-full bg-black
                px-5 py-3
                text-sm font-bold text-white
                transition duration-300
                hover:-translate-y-1
              "
            >
              VIEW MY WORK

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            <a
              href={resume}
              download="Anand-Singh-Resume.pdf"
              className="
                inline-flex items-center gap-3
                rounded-full border border-black
                px-5 py-3
                text-sm font-bold text-black
                transition duration-300
                hover:bg-black hover:text-white
              "
            >
              RESUME
              <Download size={17} />
            </a>

          </div>

          {/* Socials */}
          <div className="mt-8 flex gap-3">

            <a
              href="https://github.com/02sk"
              target="_blank"
              rel="noreferrer"
              className="
                flex h-11 w-11 items-center
                justify-center rounded-full
                bg-white shadow-sm
                transition hover:-translate-y-1
              "
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/anand-raj-164649383"
              target="_blank"
              rel="noreferrer"
              className="
                flex h-11 w-11 items-center
                justify-center rounded-full
                bg-white shadow-sm
                transition hover:-translate-y-1
              "
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:anandrajgcet91@gmail.com"
              className="
                flex h-11 w-11 items-center
                justify-center rounded-full
                bg-white shadow-sm
                transition hover:-translate-y-1
              "
            >
              <Mail size={19} />
            </a>

          </div>
        </div>
      </div>

      {/* ================= DESKTOP IMAGE ================= */}
      <div
        className="
          absolute right-[4%] top-1/2
          z-10 hidden -translate-y-1/2
          lg:block
        "
      >
        <div
          className="
            h-[320px] w-[320px]
            overflow-hidden rounded-full
            md:h-[380px] md:w-[380px]
            xl:h-[440px] xl:w-[440px]
          "
        >
          <img
            src={profileImage}
            alt="Anand Singh"
            className="h-full w-full object-cover"
          />
        </div>

        <a
          href="#about"
          className="
            absolute -bottom-10
            left-1/2 -translate-x-1/2
            flex items-center gap-2
            text-[10px] font-semibold
            tracking-[0.18em] text-white
          "
        >
          SCROLL
          <ArrowDown size={13} />
        </a>
      </div>

      {/* ================= MOBILE CONTENT ================= */}
      <div
        className="
          absolute bottom-0 left-0
          z-20 w-full
          px-6 pb-8
          sm:px-8 sm:pb-10
          lg:hidden
        "
      >
        <p className="mb-2 text-sm font-medium text-black/70">
          Hi, I am
        </p>

        <h1
          className="
            font-[Space_Grotesk]
            text-[3.2rem]
            font-bold
            leading-[0.9]
            tracking-[-0.06em]
            sm:text-[4rem]
          "
        >
          ANAND
          <br />
          SINGH<span className="text-gray-500">.</span>
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="font-semibold">
            Full Stack Developer
          </span>

          <span className="text-gray-400">•</span>

          <span className="text-gray-500">
            MERN
          </span>
        </div>

        {/* Mobile social icons */}
        <div className="mt-5 flex gap-3">

          <a
            href="https://github.com/02sk"
            target="_blank"
            rel="noreferrer"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full bg-white
              shadow-md
              transition hover:-translate-y-1
            "
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/anand-raj-164649383"
            target="_blank"
            rel="noreferrer"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full bg-white
              shadow-md
              transition hover:-translate-y-1
            "
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href="mailto:anandrajgcet91@gmail.com"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full bg-white
              shadow-md
              transition hover:-translate-y-1
            "
          >
            <Mail size={17} />
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero