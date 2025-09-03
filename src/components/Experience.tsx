import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of cloud-native applications and mentoring junior developers in modern web technologies.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
      achievements: [
        'Architected and delivered 3 major client projects with 99.9% uptime',
        'Reduced deployment time by 80% through CI/CD pipeline optimization',
        'Mentored 8 junior developers and led code review processes',
        'Increased team productivity by 40% through process improvements'
      ]
    },
    {
      id: 2,
      title: 'Data Engineer',
      company: 'DataInsights Inc.',
      location: 'New York, NY',
      duration: '2020 - 2022',
      type: 'Full-time',
      description: 'Built and maintained large-scale data pipelines processing millions of records daily for business intelligence.',
      technologies: ['Python', 'Apache Kafka', 'Spark', 'PostgreSQL', 'AWS', 'Airflow'],
      achievements: [
        'Designed ETL pipelines processing 10M+ records daily',
        'Improved data processing speed by 300% through optimization',
        'Built real-time analytics dashboard used by 500+ stakeholders',
        'Reduced data inconsistencies by 95% through quality monitoring'
      ]
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      type: 'Full-time',
      description: 'Developed customer-facing web applications and internal tools for a fast-growing fintech startup.',
      technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Redis', 'Stripe API'],
      achievements: [
        'Built core platform features used by 10,000+ customers',
        'Implemented payment processing system handling $2M+ monthly',
        'Reduced page load times by 60% through optimization',
        'Collaborated with product team to define technical requirements'
      ]
    },
    {
      id: 4,
      title: 'Software Developer Intern',
      company: 'Innovation Labs',
      location: 'Remote',
      duration: '2018 - 2019',
      type: 'Internship',
      description: 'Contributed to open-source projects and developed proof-of-concept applications using emerging technologies.',
      technologies: ['JavaScript', 'React', 'Python', 'Firebase', 'Git'],
      achievements: [
        'Contributed to 5 open-source projects with 1000+ GitHub stars',
        'Developed mobile app prototype with 95% positive user feedback',
        'Participated in hackathons and won 2 innovation awards',
        'Gained foundational experience in agile development practices'
      ]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-32 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my career highlights and the impact I've made across different organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-md"></div>

                {/* Content Card */}
                <div className={`timeline-mobile md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card-feature"
                  >
                    <div className="flex flex-col mb-4">
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{experience.title}</h3>
                        <div className="mobile-card-stack gap-2 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Building className="icon-center h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="icon-center h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground flex-wrap">
                          <Calendar className="icon-center h-4 w-4 flex-shrink-0" />
                          <span>{experience.duration}</span>
                          <span className="text-primary">• {experience.type}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies</h4>
                      <div className="badge-container">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="badge-mobile px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;