import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import Program from "@/components/sections/Program"
import Tentang from "@/components/sections/Tentang"
import Testimoni from "@/components/sections/Testimoni"
import Galeri from "@/components/sections/Galeri"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Program />
      <Tentang />
      <Testimoni />
      <Galeri />
      <FAQ />
      <Footer />
    </main>
  )
}