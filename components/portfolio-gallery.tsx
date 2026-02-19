"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

function GalleryCard({
  src,
  alt,
  title,
  index,
}: {
  src: string
  alt: string
  title: string
  index: number
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted mb-4">
        {!loaded && !error && (
          <Skeleton className="absolute inset-0 bg-muted" />
        )}
        {error ? (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Imagen no disponible</span>
          </div>
        ) : (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>
      
      {/* Caption below image */}
      <div className="px-1">
        <h4 className="font-serif text-lg text-foreground mb-1">{title}</h4>
      </div>
    </motion.div>
  )
}

interface PortfolioGalleryProps {
  content: any
  sections: any[]
}

export function PortfolioGallery({ content, sections }: PortfolioGalleryProps) {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
            {content.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{section.title}</h3>
                <p className="text-muted-foreground">{section.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.projects.map((project: any, index: number) => (
                  <GalleryCard
                    key={project.src}
                    src={project.src}
                    alt={project.alt}
                    title={project.title}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
