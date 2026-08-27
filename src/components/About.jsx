function About() {
  return (
    <section
      id="about"
      className="scroll-mt-10 bg-white px-4 py-20 sm:px-6 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-20 flex items-center gap-4">

          <span className="font-mono text-sm text-gray-400">
            01
          </span>

          <span className="h-px w-12 bg-black" />

          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            About Me
          </span>

        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          <h2 className="text-4xl font-bold leading-[0.96] tracking-tight md:text-5xl xl:text-6xl">
            I build digital
            <br />
            products that
            <br />
            <span className="text-gray-300">
              solve problems.
            </span>
          </h2>

          <div>

            <p className="text-lg leading-8 text-gray-700 md:text-xl md:leading-9">
              I'm Anand Singh, a Full Stack Developer focused on
              building modern, scalable and user-friendly web
              applications.
            </p>

            <p className="mt-6 leading-7 text-gray-500 md:leading-8">
              I enjoy working across the entire development stack,
              from creating interfaces with React to developing
              APIs and database systems with Node.js, Express and
              MongoDB.
            </p>

            <p className="mt-6 leading-7 text-gray-500 md:leading-8">
              I'm constantly learning new technologies and looking
              for opportunities where I can build useful products,
              solve real problems and grow as a developer.
            </p>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">

          <div>
            <p className="text-4xl font-bold md:text-5xl">03+</p>
            <p className="mt-2 text-sm text-gray-500">
              Projects Built
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold md:text-5xl">10+</p>
            <p className="mt-2 text-sm text-gray-500">
              Technologies
            </p>
          </div>

          <div className="md:mt-0">
            <p className="text-4xl font-bold md:text-5xl">MERN</p>
            <p className="mt-2 text-sm text-gray-500">
              Primary Stack
            </p>
          </div>

          <div className="md:mt-0">
            <p className="text-4xl font-bold md:text-5xl">∞</p>
            <p className="mt-2 text-sm text-gray-500">
              Curiosity
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About