import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#portfolio" },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black/80 px-6 py-4 text-white shadow-sm backdrop-blur-sm md:px-10 lg:px-16">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-tight text-white"
        >
          AS<span className="text-gray-500">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-3 text-sm font-semibold text-white transition hover:text-gray-300"
            >
              <span className="font-mono text-[10px] text-white/40">
                0{index + 1}
              </span>

              {link.name}

              <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-5" />
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
          >
            CONTACT ME
          </a>

        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 rounded-2xl bg-black/95 p-5 shadow-2xl md:hidden">

          <div className="flex flex-col gap-4">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-black"
            >
              CONTACT ME
            </a>

          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar