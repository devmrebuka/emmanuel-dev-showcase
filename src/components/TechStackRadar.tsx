import { motion } from 'framer-motion';
import { useState } from 'react';

const TechStackRadar = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const techStacks = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'React', level: 95, description: 'Advanced component architecture and hooks' },
        { name: 'TypeScript', level: 90, description: 'Type-safe development and advanced patterns' },
        { name: 'Vue.js', level: 85, description: 'Component composition and reactive systems' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS and design systems' }
      ],
      color: 'hsl(280 100% 55%)'
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', level: 88, description: 'Scalable server-side applications' },
        { name: 'Python', level: 92, description: 'Django, FastAPI, and data processing' },
        { name: 'PostgreSQL', level: 85, description: 'Complex queries and database optimization' },
        { name: 'Redis', level: 80, description: 'Caching and session management' }
      ],
      color: 'hsl(142 76% 36%)'
    },
    {
      name: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', level: 90, description: 'EC2, S3, Lambda, and infrastructure' },
        { name: 'Docker', level: 85, description: 'Containerization and orchestration' },
        { name: 'Kubernetes', level: 75, description: 'Container orchestration and scaling' },
        { name: 'CI/CD', level: 88, description: 'GitHub Actions and deployment pipelines' }
      ],
      color: 'hsl(38 92% 50%)'
    },
    {
      name: 'Data & ML',
      technologies: [
        { name: 'Apache Kafka', level: 82, description: 'Real-time data streaming' },
        { name: 'Spark', level: 78, description: 'Big data processing and analytics' },
        { name: 'Machine Learning', level: 75, description: 'Scikit-learn and model deployment' },
        { name: 'Airflow', level: 80, description: 'Workflow orchestration and scheduling' }
      ],
      color: 'hsl(217 91% 60%)'
    }
  ];

  const allTechnologies = techStacks.flatMap(stack => 
    stack.technologies.map(tech => ({ ...tech, category: stack.name, color: stack.color }))
  );

  return (
    <section id="tech-radar" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tech Stack <span className="text-gradient">Radar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive visualization of my technical expertise across different domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Radar Background */}
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Concentric circles */}
                {[80, 120, 160, 200].map((radius, index) => (
                  <circle
                    key={radius}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    opacity={0.3}
                  />
                ))}
                
                {/* Axis lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="200"
                    y1="200"
                    x2={200 + 200 * Math.cos((angle - 90) * Math.PI / 180)}
                    y2={200 + 200 * Math.sin((angle - 90) * Math.PI / 180)}
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    opacity={0.2}
                  />
                ))}

                {/* Technology points */}
                {allTechnologies.map((tech, index) => {
                  const angle = (index * 360 / allTechnologies.length) - 90;
                  const radius = (tech.level / 100) * 180 + 20;
                  const x = 200 + radius * Math.cos(angle * Math.PI / 180);
                  const y = 200 + radius * Math.sin(angle * Math.PI / 180);

                  return (
                    <motion.g key={tech.name}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={selectedTech === tech.name ? "8" : "6"}
                        fill={tech.color}
                        stroke="hsl(var(--background))"
                        strokeWidth="2"
                        className="cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />
                      {selectedTech === tech.name && (
                        <motion.text
                          x={x}
                          y={y - 15}
                          textAnchor="middle"
                          className="text-xs font-medium fill-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {tech.name}
                        </motion.text>
                      )}
                    </motion.g>
                  );
                })}
              </svg>

              {/* Legend */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <div className="w-16 h-1 bg-gradient-to-r from-muted to-primary rounded-full"></div>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {selectedTech ? (
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-elegant"
              >
                {(() => {
                  const tech = allTechnologies.find(t => t.name === selectedTech);
                  return tech ? (
                    <>
                      <div className="flex items-center space-x-3 mb-4">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: tech.color }}
                        ></div>
                        <h3 className="text-2xl font-bold">{tech.name}</h3>
                        <span className="text-sm text-muted-foreground">({tech.category})</span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Proficiency</span>
                          <span className="text-sm text-primary font-bold">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{ backgroundColor: tech.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                          ></motion.div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </>
                  ) : null;
                })()}
              </motion.div>
            ) : (
              <div className="card-elegant">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Interactive Tech Radar</h3>
                <p className="text-muted-foreground mb-4">
                  Click on any technology point in the radar to explore my expertise level and experience with that technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {techStacks.map((stack) => (
                    <div key={stack.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: stack.color }}
                      ></div>
                      <span className="text-sm font-medium">{stack.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category Overview */}
            <div className="space-y-4">
              {techStacks.map((stack) => (
                <motion.div
                  key={stack.name}
                  whileHover={{ scale: 1.02 }}
                  className="card-elegant cursor-pointer"
                  onClick={() => setSelectedTech(stack.technologies[0].name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: stack.color }}
                      ></div>
                      <h4 className="font-semibold">{stack.name}</h4>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stack.technologies.length} technologies
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackRadar;