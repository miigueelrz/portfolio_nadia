"use client"

import { motion } from "framer-motion"
import { Sparkles, Flower, Palette, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG } from "@/lib/content"

const iconMap = {
  graduation: GraduationCap,
  palette: Palette,
  flower: Flower,
  sparkles: Sparkles,
}

interface AboutSectionProps {
  content: any
  credentials: any[]
}

export function AboutSection({ content, credentials }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
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
        </motion.div>

        {/* 2-Column Layout: Professional Text & Video */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: Professional Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                {SITE_CONFIG.name}
              </h2>
              <p className="text-xl text-muted-foreground font-medium tracking-wide">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2">
              {content.badges.map((badge: string) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm border-border text-foreground bg-background/50 backdrop-blur-sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* The 3 Points */}
            <div className="space-y-6">
              <div className="border-l-2 border-destructive/30 pl-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {content.whoIAm.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.whoIAm.description}
                </p>
              </div>
              
              <div className="border-l-2 border-destructive/30 pl-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {content.myTraining.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.myTraining.description}
                </p>
              </div>

              <div className="border-l-2 border-destructive/30 pl-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {content.myPurpose.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {content.myPurpose.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black group">
              <video
                src="/videos/videocurriculum.mp4"
                poster="/images/nadia-portrait.jpg"
                controls
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>

        {/* Credentials Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {credentials.map((credential, index) => {
            const Icon = iconMap[credential.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/30 transition-transform duration-300 hover:scale-105 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground mb-2">
                  {credential.year}
                </span>
                <h4 className="font-serif text-lg text-foreground mb-1">
                  {credential.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {credential.subtitle}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
