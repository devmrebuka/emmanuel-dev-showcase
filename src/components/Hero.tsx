import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emmanuelAvatar from '@/assets/emmanuel-avatar.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={emmanuelAvatar}
                  alt="Emmanuel C. Moghalu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Emmanuel</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
              Software Developer & Data Engineer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I craft exceptional digital experiences through innovative software solutions 
            and robust data engineering. Passionate about building scalable applications 
            that make a meaningful impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="btn-ghost-hero group"
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </motion.div>

          {/* Social Links - Fixed to hero section only */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-20 group"
          >
            {/* Collapsed dot state */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <motion.div
                className="w-4 h-4 bg-primary/30 rounded-full cursor-pointer transition-all duration-300 group-hover:opacity-0"
              />
              
              {/* Expanded state on hover */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileHover={{ height: 'auto', opacity: 1 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-8 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <motion.a
                  href="https://github.com/emmanuelmoghalu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-glow"
                  title="GitHub"
                >
                  <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/emmanuelmoghalu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-glow"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="mailto:emmanuel@example.com"
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-glow"
                  title="Email"
                >
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-8 bg-primary/50 rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;