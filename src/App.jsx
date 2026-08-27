import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-white md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Anand Singh</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App