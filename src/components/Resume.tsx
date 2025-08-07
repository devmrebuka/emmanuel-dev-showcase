import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, Code, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const resumeStats = [
    {
      icon: Briefcase,
      label: 'Years Experience',
      value: '5+',
      color: 'text-blue-500'
    },
    {
      icon: Code,
      label: 'Projects Completed',
      value: '50+',
      color: 'text-green-500'
    },
    {
      icon: Award,
      label: 'Certifications',
      value: '8',
      color: 'text-purple-500'
    },
    {
      icon: FileText,
      label: 'Technical Skills',
      value: '20+',
      color: 'text-orange-500'
    }
  ];

  const handleDownload = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume/emmanuel-moghalu-resume.pdf';
    link.download = 'Emmanuel_Moghalu_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // In a real app, this would open the resume in a new tab
    window.open('/resume/emmanuel-moghalu-resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete resume or preview it online to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Resume Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {resumeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-feature text-center"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-muted mb-4 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="card-elegant">
              <h3 className="text-xl font-bold mb-4">Resume Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive overview of technical skills and expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed work experience with quantified achievements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Education background and professional certifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Notable projects and open-source contributions</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Resume Preview and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Resume Preview */}
            <div className="card-feature">
              <div className="aspect-[8.5/11] bg-gradient-to-b from-background to-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-6">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Resume Preview</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click preview to view full document
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownload}
                  className="btn-hero flex-1 group"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download PDF
                </Button>
                <Button
                  onClick={handlePreview}
                  variant="outline"
                  className="btn-ghost-hero flex-1 group"
                >
                  <Eye className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Preview Online
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card-elegant">
              <h3 className="text-lg font-bold mb-3">Document Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-medium">PDF</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-medium">2.4 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span className="font-medium">January 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Pages:</span>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;