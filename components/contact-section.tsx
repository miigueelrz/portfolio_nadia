"use client"

import { motion } from "framer-motion"
import { useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Send, Instagram, Mail, Phone } from "lucide-react"
import { SITE_CONFIG } from "@/lib/content"

interface ContactSectionProps {
  content: any
}

export function ContactSection({ content }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success(content.success.title, {
      description: content.success.description,
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
              {content.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {content.description}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/30 hover:border-border transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correo</p>
                  <p className="text-foreground">{SITE_CONFIG.email}</p>
                </div>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/30 hover:border-border transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="text-foreground">{SITE_CONFIG.phone}</p>
                </div>
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/30 hover:border-border transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-foreground">{SITE_CONFIG.instagram}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-border/30"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      {content.form.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={content.form.namePlaceholder}
                      required
                      className="rounded-xl border-border/50 bg-background focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      {content.form.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={content.form.emailPlaceholder}
                      required
                      className="rounded-xl border-border/50 bg-background focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">
                    {content.form.service}
                  </Label>
                  <Input
                    id="service"
                    name="service"
                    placeholder={content.form.servicePlaceholder}
                    className="rounded-xl border-border/50 bg-background focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">
                    {content.form.date}
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="rounded-xl border-border/50 bg-background focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {content.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={content.form.messagePlaceholder}
                    rows={4}
                    required
                    className="rounded-xl border-border/50 bg-background focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                >
                  {isSubmitting ? (
                    content.form.submitting
                  ) : (
                    <>
                      {content.form.submit}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
