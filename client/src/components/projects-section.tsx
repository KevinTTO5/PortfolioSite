export default function ProjectsSection() {
  const getTagIcon = (tag: string) => {
    const iconMap: { [key: string]: string } = {
      'React': 'fab fa-react',
      'AWS': 'fab fa-aws',
      'CI/CD': 'fas fa-sync-alt',
      'Performance': 'fas fa-tachometer-alt',
      'Unreal Engine 5': 'fab fa-unity',
      'AI Systems': 'fas fa-brain',
      'Game Design': 'fas fa-gamepad',
      'Team Project': 'fas fa-users',
      'Google Apps Script': 'fab fa-google',
      'Automation': 'fas fa-robot',
      'Calendar API': 'fas fa-calendar',
      'Optimization': 'fas fa-chart-line',
      'Java': 'fab fa-java',
      'Graph Algorithms': 'fas fa-project-diagram',
      'Data Structures': 'fas fa-database'
    };
    return iconMap[tag] || 'fas fa-tag';
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully responsive, performance-optimized portfolio built with modern web technologies. Features AWS S3 & CloudFront hosting with automated CI/CD pipeline achieving 95+ Lighthouse scores.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "AWS", "CI/CD", "Performance"],
      githubUrl: "https://github.com/KevinTTO5/PortfolioSite",
      liveUrl: "#",
      badge: { icon: "fas fa-globe", text: "Live" },
      gradientFrom: "from-primary",
      gradientTo: "to-secondary"
    },
    {
      title: "Burnt Out (UE5 Horror Game)",
      description: "A psychological horror game exploring work-life exhaustion through Unreal Engine 5. Features advanced AI systems, behavior trees, and immersive storytelling mechanics.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Unreal Engine 5", "AI Systems", "Game Design", "Team Project"],
      githubUrl: "https://github.com/KevinTTO5/Burnt-Out/tree/newprojectapproach",
      liveUrl: "#contact",
      badge: { icon: "fas fa-gamepad", text: "Game" },
      gradientFrom: "from-red-900",
      gradientTo: "to-gray-900"
    },
    {
      title: "Student Schedule Builder",
      description: "Automated scheduling system for educational centers using Google Apps Script. Streamlines student-instructor assignment process with calendar integration and optimization algorithms.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Google Apps Script", "Automation", "Calendar API", "Optimization"],
      githubUrl: "https://github.com/KevinTTO5/KevinTTO5.github.io/blob/main/Schedule%20Builder%20AppScripts",
      badge: { icon: "fas fa-calendar", text: "Automation" },
      gradientFrom: "from-blue-900",
      gradientTo: "to-purple-900"
    },
    {
      title: "Apple Calendar Populating Script",
      description: "My workplace never provided direct implementations of placing my shifts from their website to my apple calendar, so I developed a python script that would login into the site for me, scrape the contents of the schedule and populate my desired apple calendar.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Javascript", "AppleCal", "Optimization", "Selenium"],
      githubUrl: "https://github.com/KevinTTO5/KevinTTO5.github.io/blob/main/schedule_to_calendar.py",
      badge: { icon: "fas fa-network-wired", text: "Automation" },
      gradientFrom: "from-green-900",
      gradientTo: "to-teal-900"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my work showcasing technical innovation and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover" 
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 100)}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden`}>
                <img 
                  src={project.image}
                  alt={`${project.title} project visualization`}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-4 right-4 bg-background bg-opacity-80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <i className={`${project.badge.icon} mr-1`}></i>
                  {project.badge.text}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary bg-opacity-10 text-secondary border border-border rounded-full text-sm flex items-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <i className={`${getTagIcon(tag)} mr-1`}></i>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent transition-colors"
                    data-testid={`link-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <i className="fab fa-github mr-2"></i>View Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target={project.liveUrl.startsWith('#') ? undefined : "_blank"}
                      rel={project.liveUrl.startsWith('#') ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors"
                      data-testid={`link-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={project.liveUrl.startsWith('#') ? (e) => {
                        e.preventDefault();
                        const target = project.liveUrl === '#contact' ? document.getElementById('contact') : null;
                        target?.scrollIntoView({ behavior: 'smooth' });
                      } : undefined}
                    >
                      <i className={project.liveUrl === '#contact' ? "fas fa-play mr-2" : "fas fa-external-link-alt mr-2"}></i>
                      {project.liveUrl === '#contact' ? 'Request Demo' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <a 
            href="https://github.com/KevinTTO5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105"
            data-testid="link-all-projects"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
