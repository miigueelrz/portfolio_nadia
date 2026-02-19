"use client"

import { motion } from "framer-motion"
import { Heart, Camera, Star, Users, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  heart: Heart,
  camera: Camera,
  star: Star,
  users: Users,
}

interface PricingSectionProps {
  content: any
  pricing: any[]
}

export function PricingSection({ content, pricing }: PricingSectionProps) {
  return (
    <section id="services" className="py-24 md:py-32">
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

        {/* Pricing Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border/50 shadow-none hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 rounded-2xl bg-card flex flex-col overflow-hidden relative">
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-serif text-xl text-foreground">
                      {item.service}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    {/* Price */}
                    <div className="mb-6">
                      <span className="font-serif text-3xl text-primary">{item.price}</span>
                    </div>
                    
                    {/* Includes List */}
                    <ul className="space-y-3 mt-auto">
                      {item.includes.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
