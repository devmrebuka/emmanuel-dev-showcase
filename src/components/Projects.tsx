import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'DataFlow Analytics Platform',
      description: 'A comprehensive data analytics platform that processes millions of records daily with real-time visualizations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Python', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      category: 'Data Engineering',
      github: 'https://github.com/emmanuelmoghalu/dataflow-analytics',
      demo: 'https://dataflow-demo.vercel.app',
      features: [
        'Real-time data processing with Apache Kafka',
        'Interactive dashboards with custom visualizations',
        'Automated data quality monitoring',
        'Scalable microservices architecture',
        'Advanced user authentication and authorization'
      ],
      problemSolved: 'Organizations struggled with fragmented data sources and lack of real-time insights. This platform unifies multiple data streams and provides actionable analytics in real-time.',
      impact: 'Reduced data processing time by 70% and improved decision-making speed for over 50+ companies.'
    },
    {
      id: 2,
      title: 'AI-Powered Code Review Assistant',
      description: 'Machine learning tool that automates code review processes and suggests improvements using natural language processing.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB', 'AWS'],
      category: 'Machine Learning',
      github: 'https://github.com/emmanuelmoghalu/ai-code-reviewer',
      demo: 'https://ai-reviewer-demo.com',
      features: [
        'Automated code quality analysis',
        'Smart suggestion generation',
        'Integration with popular IDEs',
        'Custom rule configuration',
        'Team collaboration features'
      ],
      problemSolved: 'Manual code reviews are time-consuming and inconsistent. This AI assistant standardizes the review process while maintaining high code quality.',
      impact: 'Reduced code review time by 60% and improved code quality scores by 45% across development teams.'
    },
    {
      id: 3,
      title: 'Cloud-Native E-commerce Platform',
      description: 'Modern e-commerce solution built with microservices architecture, supporting high-traffic scenarios.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Node.js', 'GraphQL', 'Kubernetes', 'Redis', 'Stripe'],
      category: 'Full-Stack Development',
      github: 'https://github.com/emmanuelmoghalu/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.com',
      features: [
        'Scalable microservices architecture',
        'Real-time inventory management',
        'Advanced search and filtering',
        'Multi-payment gateway integration',
        'Comprehensive admin dashboard'
      ],
      problemSolved: 'Traditional e-commerce platforms lack scalability and modern user experience. This platform provides enterprise-grade performance with consumer-friendly interfaces.',
      impact: 'Handles 10k+ concurrent users with 99.9% uptime and increased conversion rates by 35%.'
    },
    {
      id: 4,
      title: 'Smart City IoT Dashboard',
      description: 'Real-time monitoring system for urban infrastructure using IoT sensors and predictive analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Python', 'InfluxDB', 'Grafana', 'MQTT', 'TensorFlow'],
      category: 'IoT & Analytics',
      github: 'https://github.com/emmanuelmoghalu/smart-city-dashboard',
      demo: 'https://smart-city-demo.herokuapp.com',
      features: [
        'Real-time sensor data collection',
        'Predictive maintenance algorithms',
        'Interactive city maps',
        'Automated alert system',
        'Historical data analysis'
      ],
      problemSolved: 'Cities lack unified systems to monitor infrastructure health. This platform provides comprehensive monitoring and predictive insights for better urban management.',
      impact: 'Reduced infrastructure maintenance costs by 40% and improved emergency response time by 25%.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
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
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my recent work that showcases my expertise in software development and data engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="card-feature group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-primary font-semibold">{project.category}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div className="space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                    {selectedProject.title}
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {selectedProject.category}
                    </span>
                  </DialogTitle>
                </DialogHeader>

                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">{selectedProject.category} Project</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Overview</h4>
                      <p className="text-muted-foreground">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Problem Solved</h4>
                      <p className="text-muted-foreground">{selectedProject.problemSolved}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Impact</h4>
                      <p className="text-muted-foreground">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button asChild className="flex-1">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;