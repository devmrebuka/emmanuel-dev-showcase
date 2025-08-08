import { useState } from 'react';
import DynamicNavigation from '@/components/DynamicNavigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import TechStackRadar from '@/components/TechStackRadar';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import EasterEgg from '@/components/EasterEgg';
import { useKeyboardShortcuts, useKonamiCode } from '@/hooks/useKeyboardShortcuts';
import { useThemeMemory } from '@/hooks/useThemeMemory';

const Index = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

  // Initialize theme memory
  useThemeMemory();

  // Keyboard shortcuts
  useKeyboardShortcuts({
    'ctrl+k': () => setIsCommandPaletteOpen(true),
    '/': () => setIsCommandPaletteOpen(true),
  });

  // Konami code easter egg
  useKonamiCode(() => {
    setIsEasterEggActive(true);
  });

  return (
    <div className="min-h-screen bg-background font-inter">
      <DynamicNavigation onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStackRadar />
        <BlogSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Features */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />
      <EasterEgg 
        isActive={isEasterEggActive} 
        onComplete={() => setIsEasterEggActive(false)} 
      />
    </div>
  );
};

export default Index;
