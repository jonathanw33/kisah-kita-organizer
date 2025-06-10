import KisahKitaHero from '@/components/ui/hero'
import AboutSection from '@/components/sections/about'
import ServicesSection from '@/components/sections/services'
import GallerySection from '@/components/sections/gallery'
import ContactSection from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <KisahKitaHero />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}
