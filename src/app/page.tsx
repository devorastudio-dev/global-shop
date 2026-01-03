import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { About } from "./_components/about"
import { Footer } from "./_components/footer";


export default function Home() {
  return(
    <main>
    <Hero />
    <Services />
    <Testimonials />
    <About />
    <Footer />
    </main>
  )
}