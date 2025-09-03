import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'React, TypeScript, Node.js, Python, and modern web technologies'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'ETL pipelines, data warehousing, and analytics infrastructure'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS, Azure, containerization, and scalable cloud solutions'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Data science, AI model development, and predictive analytics'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'System optimization, monitoring, and high-performance computing'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Technical mentoring, project management, and cross-functional collaboration'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer and data engineer with a proven track record 
            of building scalable applications and robust data infrastructure. I thrive on 
            solving complex problems and turning innovative ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-elegant">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in software development and data engineering, 
                  I've had the privilege of working with cutting-edge technologies and 
                  leading innovative projects that have impacted thousands of users.
                </p>
                <p>
                  My expertise spans full-stack web development, cloud architecture, and 
                  data pipeline engineering. I'm particularly passionate about creating 
                  efficient, scalable solutions that bridge the gap between complex data 
                  and user-friendly applications.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, or mentoring the next generation 
                  of developers.
                </p>
              </div>
            </div>

            <div className="card-elegant">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">Currently Learning</h3>
              <div className="badge-container">
                {['WebAssembly', 'Rust', 'Kubernetes', 'GraphQL', 'AI/ML'].map((tech) => (
                  <span
                    key={tech}
                    className="badge-mobile px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid - Mobile First */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Mobile: Simple grid */}
            <div className="md:hidden mobile-card-stack">
              {skills.map((skill) => (
                <div key={skill.title} className="p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="icon-center p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold mb-1 text-foreground">{skill.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Marquee */}
            <div className="hidden md:block relative h-[480px] overflow-hidden rounded-2xl bg-gradient-to-b from-muted/20 to-background border border-border/30">
              {/* Fade gradients */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background via-background/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/70 to-transparent z-10 pointer-events-none" />

              {/* Marquee content */}
              <div className="marquee-vert">
                <div className="flex flex-col space-y-6 pt-4">
                  {skills.map((skill) => (
                    <div key={skill.title} className="mx-6 min-h-[96px] flex items-center opacity-95 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-start space-x-4 w-full p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-300">
                        <div className="icon-center p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                          <skill.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold mb-1.5 text-foreground">{skill.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duplicate for seamless scroll */}
                <div className="flex flex-col space-y-6 pt-4" aria-hidden="true">
                  {skills.map((skill, index) => (
                    <div key={`${skill.title}-dup-${index}`} className="mx-6 min-h-[96px] flex items-center opacity-95 transition-opacity duration-300">
                      <div className="flex items-start space-x-4 w-full p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30">
                        <div className="icon-center p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                          <skill.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold mb-1.5 text-foreground">{skill.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;