import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ChatBot } from '../components/ChatBot';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}
