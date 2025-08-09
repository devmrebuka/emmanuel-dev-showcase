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
              <h3 className="text-2xl font-bold mb-4 text-gradient">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                {['WebAssembly', 'Rust', 'Kubernetes', 'GraphQL', 'AI/ML'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-b from-muted/30 to-background border border-border/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none" />
            
            <motion.div
              animate={{
                y: [0, -(skills.length * 120)]
              }}
              transition={{
                duration: skills.length * 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex flex-col space-y-6 pt-6"
            >
              {/* Duplicate skills array for seamless loop */}
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.title}-${index}`}
                  className="card-feature group mx-6 min-h-[100px] flex items-center"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start space-x-4 w-full">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;