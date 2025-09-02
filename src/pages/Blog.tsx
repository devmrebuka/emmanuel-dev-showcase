import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Writings
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Deep dives into software development, data engineering, and modern technology trends.
          </p>

          {/* Search */}
          <div className="relative mb-6 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 border-0 bg-muted/30 focus:bg-background transition-colors"
              aria-label="Search articles by title, content, or tags"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter articles by tag">
            <Badge
              variant={selectedTag === null ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
              onClick={() => setSelectedTag(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTag(null);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={selectedTag === null}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
                onClick={() => setSelectedTag(tag)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTag(tag);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={selectedTag === tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.some(post => post.featured) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
            aria-labelledby="featured-post-heading"
          >
            <h2 id="featured-post-heading" className="sr-only">Featured Article</h2>
            {(() => {
              const featuredPost = filteredPosts.find(post => post.featured);
              return featuredPost ? (
                <article 
                  className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-lg"
                  onClick={() => window.location.href = `/blog/${featuredPost.slug}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.location.href = `/blog/${featuredPost.slug}`;
                    }
                  }}
                  tabIndex={0}
                  role="link"
                  aria-label={`Read featured article: ${featuredPost.title}`}
                >
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              ) : null;
            })()}
          </motion.section>
        )}

        {/* Articles List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="border-t border-border/40 pt-8">
            <div className="space-y-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="group cursor-pointer py-6 border-b border-border/20 last:border-b-0"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span>{formatDate(post.date)}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
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
                    </div>
                    
                    <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-muted-foreground mb-4">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;