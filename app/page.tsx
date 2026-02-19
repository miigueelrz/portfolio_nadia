"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { DICTIONARY, SITE_CONFIG } from "@/lib/content"

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es")
  const t = DICTIONARY[lang]
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"))

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F9F7F2" }}>
      <Navigation lang={lang} toggleLang={toggleLang} links={t.nav} />
      <HeroSection content={t.hero} downloadText={t.footer.downloadPortfolio} />
      <PortfolioGallery content={t.portfolio} sections={t.portfolioSections} />
      <AboutSection content={t.about} credentials={t.credentials} />
      <PricingSection content={t.services} pricing={t.pricing} />
      <ContactSection content={t.contact} />
      <Footer content={t.footer} siteConfig={SITE_CONFIG} navLinks={t.nav} />
    </main>
  )
}
