import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { About } from '@/components/about'
import { Wedding } from '@/components/wedding'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <Wedding />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
