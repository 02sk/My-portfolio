import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {
  return (
    <main>

      <Hero />

      <About />

      <Skills />

      <Portfolio />

      <Contact />

      <footer className="bg-black px-8 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anand Singh. All rights reserved.
      </footer>

    </main>
  )
}

export default App