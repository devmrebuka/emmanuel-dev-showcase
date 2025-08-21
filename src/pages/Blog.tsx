import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Search, Filter, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';  
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumb from '@/components/Breadcrumb';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Data Pipelines with Apache Kafka and Python',
      excerpt: 'A comprehensive guide to designing and implementing robust data processing pipelines that can handle millions of events per second.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Data Engineering', 'Apache Kafka', 'Python', 'Scalability'],
      featured: true,
      slug: 'building-scalable-data-pipelines',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'Engineering'
    },
    {
      id: 2,
      title: 'Deploying Machine Learning Models to Production: A Complete Guide',
      excerpt: 'Learn how to take your ML models from development to production with confidence, covering containerization, monitoring, and CI/CD.',
      date: '2024-01-08',
      readTime: '12 min read',
      tags: ['Machine Learning', 'MLOps', 'Docker', 'Production'],
      featured: false,
      slug: 'machine-learning-production',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      category: 'ML & AI'
    },
    {
      id: 3,
      title: 'Microservices Architecture: Lessons from Building at Scale',
      excerpt: 'Key insights and practical advice from implementing microservices in production environments, including common pitfalls and solutions.',
      date: '2023-12-22',
      readTime: '10 min read',
      tags: ['Microservices', 'Architecture', 'DevOps', 'Scalability'],
      featured: false,
      slug: 'microservices-architecture',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      category: 'Architecture'
    },
    {
      id: 4,
      title: 'Modern React Patterns: From Hooks to Suspense',
      excerpt: 'Exploring advanced React patterns and best practices for building maintainable and performant applications.',
      date: '2023-12-10',
      readTime: '15 min read',
      tags: ['React', 'JavaScript', 'Frontend', 'Patterns'],
      featured: false,
      slug: 'modern-react-patterns',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
      category: 'Frontend'
    },
    {
      id: 5,
      title: 'Database Optimization: From Queries to Infrastructure',
      excerpt: 'A deep dive into database performance optimization techniques, covering indexing, query optimization, and scaling strategies.',
      date: '2023-11-28',
      readTime: '11 min read',
      tags: ['Database', 'Performance', 'PostgreSQL', 'Optimization'],
      featured: false,
      slug: 'database-optimization',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop',
      category: 'Backend'
    },
    {
      id: 6,
      title: 'The Future of TypeScript: New Features and Best Practices',
      excerpt: 'Exploring the latest TypeScript features and how they improve developer experience and code quality.',
      date: '2023-11-15',
      readTime: '9 min read',
      tags: ['TypeScript', 'JavaScript', 'Development', 'Best Practices'],
      featured: false,
      slug: 'future-of-typescript',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop',
      category: 'Languages'
    }
  ];

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog' }
  ];

  // SEO
  useEffect(() => {
    document.title = 'Technical Writings | Emmanuel Moghalu';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Technical writings on software development, data engineering, and modern architectures.';
    if (metaDesc) metaDesc.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
    const linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const href = window.location.origin + '/blog';
    if (linkCanonical) linkCanonical.href = href;
    else {
      const l = document.createElement('link');
      l.rel = 'canonical';
      l.href = href;
      document.head.appendChild(l);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="mb-4">
            <Badge variant="outline" className="px-4 py-2 mb-6 text-sm">
              <TrendingUp className="mr-2 h-4 w-4" />
              Latest Technical Insights
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Technical Writings
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Deep dives into software development, data engineering, and cutting-edge technology trends that shape the future.
          </p>

          {/* Enhanced Search and Filter Section */}
          <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Search */}
              <div className="relative mb-8 max-w-lg mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 focus:border-primary bg-background/50 rounded-xl transition-all duration-300"
                />
              </div>

              {/* Enhanced Tags Filter */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  <span>Filter by topic</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge
                    variant={selectedTag === null ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                    onClick={() => setSelectedTag(null)}
                  >
                    All Articles ({blogPosts.length})
                  </Badge>
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      className="cursor-pointer px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag} ({blogPosts.filter(post => post.tags.includes(tag)).length})
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Featured Post */}
        {filteredPosts.some(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            {(() => {
              const featuredPost = filteredPosts.find(post => post.featured);
              return featuredPost ? (
                <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm group cursor-pointer hover:shadow-3xl transition-all duration-500" onClick={() => window.location.href = `/blog/${featuredPost.slug}`}>
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold shadow-lg">
                        ⭐ Featured Article
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <div className="h-80 md:h-96 overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8 md:p-10 -mt-16 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg md:text-xl">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5" />
                        <span className="font-medium">{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {featuredPost.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : null;
            })()}
          </motion.div>
        )}

        {/* Enhanced Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">All Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.filter(post => !post.featured).length} articles found
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.slug}`}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs opacity-60">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <Card className="max-w-md mx-auto shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    No articles match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag(null);
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;