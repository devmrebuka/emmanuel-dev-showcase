import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Search, Filter, Calendar, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumb from '@/components/Breadcrumb';

const ProjectsArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'DataFlow Analytics Platform',
      description: 'A comprehensive data analytics platform that processes millions of records daily with real-time visualizations.',
      technologies: ['React', 'TypeScript', 'Python', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      year: '2024',
      status: 'Completed',
      githubUrl: 'https://github.com/emmanuelrichard01/dataflow-analytics',
      liveUrl: 'https://dataflow-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'AI-Powered Code Review Assistant',
      description: 'Machine learning tool that automates code review processes and suggests improvements using natural language processing.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB', 'AWS'],
      year: '2024',
      status: 'Completed',
      githubUrl: 'https://github.com/emmanuelrichard01/ai-code-reviewer',
      liveUrl: 'https://ai-reviewer-demo.com',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'High-performance chat app with WebSocket connections, end-to-end encryption, and multimedia support.',
      technologies: ['Next.js', 'Socket.io', 'Redis', 'MongoDB', 'WebRTC'],
      year: '2023',
      status: 'Completed',
      githubUrl: 'https://github.com/emmanuelrichard01/realtime-chat',
      liveUrl: 'https://chat-app-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Personal Finance Tracker',
      description: 'Modern personal finance management app with AI-powered expense categorization and investment tracking.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Plaid API', 'Chart.js'],
      year: '2023',
      status: 'In Progress',
      githubUrl: 'https://github.com/emmanuelrichard01/finance-tracker',
      liveUrl: 'https://finance-app-demo.com',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Distributed Task Queue System',
      description: 'Scalable task processing system built with microservices architecture for handling millions of jobs.',
      technologies: ['Go', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes', 'Prometheus'],
      year: '2023',
      status: 'Completed',
      githubUrl: 'https://github.com/emmanuelrichard01/task-queue',
      liveUrl: null,
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Weather Data Visualization',
      description: 'Interactive weather dashboard using historical climate data with predictive modeling.',
      technologies: ['D3.js', 'Python', 'FastAPI', 'TimescaleDB', 'Machine Learning'],
      year: '2022',
      status: 'Completed',
      githubUrl: 'https://github.com/emmanuelrichard01/weather-viz',
      liveUrl: 'https://weather-dashboard-demo.herokuapp.com',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop'
    }
  ];

  const allTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies)));

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTech = !selectedTech || project.technologies.includes(selectedTech);
    
    return matchesSearch && matchesTech;
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
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="px-3 py-1 mb-4">
            <Briefcase className="mr-2 h-4 w-4" />
            Portfolio
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Projects Archive
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my work spanning web development, data engineering, and system architecture.
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge
                variant={selectedTech === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTech(null)}
              >
                All ({projects.length})
              </Badge>
              {allTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">All Projects</h2>
            <p className="text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.status === 'Completed' ? 'secondary' : project.status === 'In Progress' ? 'default' : 'outline'}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs opacity-60">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(project.year).getFullYear()}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {project.liveUrl && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, '_blank');
                            }}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTech(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsArchive;