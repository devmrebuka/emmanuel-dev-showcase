import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToSection(href);
    }
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="h-5 w-5" />;
    if (theme === 'dark') return <Moon className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  const getThemeLabel = () => {
    if (theme === 'light') return 'Switch to dark mode';
    if (theme === 'dark') return 'Switch to system mode';
    return 'Switch to light mode';
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              className="text-xl font-bold text-gradient focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              onKeyDown={(e) => handleKeyDown(e, '#home')}
              aria-label="Emmanuel C. Moghalu - Go to home section"
            >
              Emmanuel C. Moghalu
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4" role="navigation" aria-label="Desktop navigation">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={cycleTheme}
              className="w-9 h-9 p-0 focus:ring-2 focus:ring-primary"
              aria-label={getThemeLabel()}
              title={getThemeLabel()}
            >
              {getThemeIcon()}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 p-0 focus:ring-2 focus:ring-primary"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 w-full text-left"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;