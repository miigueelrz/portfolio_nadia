"use client"

import { motion } from "framer-motion"
import { Heart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  content: any
  siteConfig: any
  navLinks: any[]
}

export function Footer({ content, siteConfig, navLinks }: FooterProps) {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <a href="#" className="font-serif text-2xl tracking-wide text-foreground">
            {siteConfig.name}
          </a>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Download Portfolio Button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-border text-foreground hover:bg-secondary bg-transparent"
          >
            <a href="/portfolio.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              {content.downloadPortfolio}
            </a>
          </Button>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {content.madeWith}{" "}
            <Heart className="w-4 h-4 text-accent fill-accent" />{" "}
            {content.location}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name} Artistry. {content.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
