import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}