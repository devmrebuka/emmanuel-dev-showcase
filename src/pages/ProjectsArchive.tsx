import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Search, Filter, Calendar, Code, Database, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Breadcrumb from '@/components/Breadcrumb';

const ProjectsArchive = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allProjects = [
    // Featured projects
    {
      id: 1,
      title: 'DataFlow Analytics Platform',
      description: 'A comprehensive data analytics platform that processes millions of records daily with real-time visualizations.',
      technologies: ['React', 'TypeScript', 'Python', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      category: 'Data Engineering',
      year: '2024',
      status: 'Production',
      github: 'https://github.com/emmanuelmoghalu/dataflow-analytics',
      demo: 'https://dataflow-demo.vercel.app',
      featured: true,
      highlights: ['Real-time processing', 'Scalable architecture', '50+ companies']
    },
    {
      id: 2,
      title: 'AI-Powered Code Review Assistant',
      description: 'Machine learning tool that automates code review processes and suggests improvements using natural language processing.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB', 'AWS'],
      category: 'Machine Learning',
      year: '2024',
      status: 'Production',
      github: 'https://github.com/emmanuelmoghalu/ai-code-reviewer',
      demo: 'https://ai-reviewer-demo.com',
      featured: true,
      highlights: ['60% faster reviews', 'AI-powered', 'IDE integration']
    },
    // Additional projects
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'High-performance chat app with WebSocket connections, end-to-end encryption, and multimedia support.',
      technologies: ['Next.js', 'Socket.io', 'Redis', 'MongoDB', 'WebRTC'],
      category: 'Full-Stack Development',
      year: '2023',
      status: 'Production',
      github: 'https://github.com/emmanuelmoghalu/realtime-chat',
      demo: 'https://chat-app-demo.vercel.app',
      featured: false,
      highlights: ['10k+ concurrent users', 'E2E encryption', 'Video calls']
    },
    {
      id: 6,
      title: 'Personal Finance Tracker',
      description: 'Modern personal finance management app with AI-powered expense categorization and investment tracking.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Plaid API', 'Chart.js'],
      category: 'Mobile Development',
      year: '2023',
      status: 'Beta',
      github: 'https://github.com/emmanuelmoghalu/finance-tracker',
      demo: 'https://finance-app-demo.com',
      featured: false,
      highlights: ['AI categorization', 'Bank integration', 'Investment tracking']
    },
    {
      id: 7,
      title: 'Distributed Task Queue System',
      description: 'Scalable task processing system built with microservices architecture for handling millions of jobs.',
      technologies: ['Go', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes', 'Prometheus'],
      category: 'DevOps & Infrastructure',
      year: '2023',
      status: 'Production',
      github: 'https://github.com/emmanuelmoghalu/task-queue',
      demo: null,
      featured: false,
      highlights: ['1M+ jobs/day', 'Auto-scaling', 'Fault tolerant']
    },
    {
      id: 8,
      title: 'Weather Data Visualization',
      description: 'Interactive weather dashboard using historical climate data with predictive modeling.',
      technologies: ['D3.js', 'Python', 'FastAPI', 'TimescaleDB', 'Machine Learning'],
      category: 'Data Visualization',
      year: '2022',
      status: 'Production',
      github: 'https://github.com/emmanuelmoghalu/weather-viz',
      demo: 'https://weather-dashboard-demo.herokuapp.com',
      featured: false,
      highlights: ['Climate predictions', 'Interactive maps', 'Real-time data']
    },
    {
      id: 9,
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform built on Ethereum with smart contracts and decentralized storage.',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Truffle', 'MetaMask'],
      category: 'Blockchain',
      year: '2022',
      status: 'Prototype',
      github: 'https://github.com/emmanuelmoghalu/blockchain-voting',
      demo: 'https://voting-demo.netlify.app',
      featured: false,
      highlights: ['Immutable records', 'Zero-knowledge proofs', 'Gas optimization']
    }
  ];

  const categories = [
    { name: 'All', icon: Globe, count: allProjects.length },
    { name: 'Data Engineering', icon: Database, count: allProjects.filter(p => p.category === 'Data Engineering').length },
    { name: 'Machine Learning', icon: Cpu, count: allProjects.filter(p => p.category === 'Machine Learning').length },
    { name: 'Full-Stack Development', icon: Code, count: allProjects.filter(p => p.category === 'Full-Stack Development').length },
    { name: 'Mobile Development', icon: Code, count: allProjects.filter(p => p.category === 'Mobile Development').length },
    { name: 'DevOps & Infrastructure', icon: Database, count: allProjects.filter(p => p.category === 'DevOps & Infrastructure').length },
    { name: 'Data Visualization', icon: Globe, count: allProjects.filter(p => p.category === 'Data Visualization').length },
    { name: 'Blockchain', icon: Cpu, count: allProjects.filter(p => p.category === 'Blockchain').length }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects Archive' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-gradient">Archive</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive collection of my projects, experiments, and contributions to the tech community.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-card to-card/80 backdrop-blur-sm ${project.featured ? 'ring-2 ring-primary/30 shadow-primary/10' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                  ⭐ Featured
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="outline" className="px-3 py-1 bg-background/50 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                        className="h-9 w-9 p-0 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                        className="h-9 w-9 p-0 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <Badge
                    variant={project.status === 'Production' ? 'default' : 'secondary'}
                    className="px-3 py-1"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto p-8 rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                No projects match your current search criteria. Try adjusting your filters or search terms.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div className="space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                    {selectedProject.title}
                    <div className="flex gap-2">
                      <Badge variant="outline">{selectedProject.category}</Badge>
                      <Badge variant={selectedProject.status === 'Production' ? 'default' : 'secondary'}>
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedProject.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.map((highlight: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {selectedProject.github && (
                      <Button asChild>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button asChild variant="outline">
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectsArchive;