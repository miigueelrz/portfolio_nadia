"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Download } from "lucide-react"
import { useState } from "react"

interface HeroSectionProps {
  content: any
  downloadText: string
}

export function HeroSection({ content, downloadText }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
              {content.subtitle}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-6 text-balance">
              {content.title.line1}
              <br />
              {content.title.line2} <em className="italic">{content.title.emphasis}</em>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                <a href="#contact">{content.cta.primary}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border text-foreground hover:bg-secondary px-8 bg-transparent"
              >
                <a href="#portfolio">{content.cta.secondary}</a>
              </Button>
            </div>
            
            {/* Download Portfolio Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <a href="/portfolio.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  {downloadText}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-lg mx-auto lg:ml-auto">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-secondary rounded-2xl -rotate-3" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                {!imageLoaded && !imageError && (
                  <Skeleton className="absolute inset-0 bg-muted rounded-2xl" />
                )}
                {imageError ? (
                  <div className="absolute inset-0 bg-muted rounded-2xl flex items-center justify-center">
                    <span className="text-muted-foreground">Imagen no disponible</span>
                  </div>
                ) : (
                  <Image
                    src="/images/nadia_perfil.jpeg"
                    alt="Nadia - Maquilladora Profesional"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    priority
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                )}
              </div>

              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
