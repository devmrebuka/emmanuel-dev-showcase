import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, X, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/emmanuelrichard01',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/e-mc/',
      label: 'LinkedIn'
    },
    {
      icon: X,
      href: 'https://x.com/_mrebuka',
      label: 'X (Twitter)'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/officialemmanuelrichard/',
      label: 'Instagram'
    },
    {
      icon: Mail,
      href: 'mailto:emma.moghalu@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gradient mb-3 sm:mb-4">
                Emmanuel C. Moghalu
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software Developer & Data Engineer passionate about building 
                innovative solutions that make a difference.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm mobile-nav-item text-left p-0 w-auto"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Get In Touch</h4>
              <div className="space-y-1.5 sm:space-y-2 text-sm text-muted-foreground">
                <p>San Francisco, CA</p>
                <a 
                  href="mailto:emma.moghalu@gmail.com"
                  className="hover:text-primary transition-colors duration-200 block truncate"
                >
                  emma.moghalu@gmail.com
                </a>
                <a 
                  href="tel:+2347086493145"
                  className="hover:text-primary transition-colors duration-200 block"
                >
                  +2347086493145
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="badge-container mb-4 sm:mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="mobile-social icon-center rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="group w-full sm:w-auto"
              >
                <span className="icon-center">
                  <ArrowUp className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
                  Back to Top
                </span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} Emmanuel C. Moghalu. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-4 sm:gap-6">
                <a 
                  href="/privacy" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
              <span className="text-xs">
                Built with ❤️ using React & TypeScript
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;