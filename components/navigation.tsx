"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/content"

interface NavigationProps {
  lang: "es" | "en"
  toggleLang: () => void
  links: { href: string; label: string }[]
}

export function Navigation({ lang, toggleLang, links }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/30"
          : "bg-transparent"
      }`}
      style={{ backgroundColor: isScrolled ? "rgba(249, 247, 242, 0.8)" : "transparent" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-wide text-foreground">
          {SITE_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 border border-border/50 rounded-full px-2 py-1">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <button
              onClick={() => lang !== "es" && toggleLang()}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                lang === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => lang !== "en" && toggleLang()}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <Button
            asChild
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact">Reservar</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-md border-b border-border/30"
          style={{ backgroundColor: "rgba(249, 247, 242, 0.95)" }}
        >
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Mobile Language Switcher */}
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
                className="text-sm font-medium"
              >
                {lang === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
              </button>
            </li>

            <li>
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Reservar
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
