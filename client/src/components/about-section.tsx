export default function AboutSection() {
  const skills = [
    { icon: "fas fa-code", name: "C++", bgColor: "bg-blue-500" },
    { icon: "fab fa-react", name: "React", bgColor: "bg-cyan-500" },
    { icon: "fab fa-python", name: "Python", bgColor: "bg-green-500" },
    { icon: "fas fa-gamepad", name: "UE5", bgColor: "bg-purple-500" },
    { icon: "fab fa-aws", name: "AWS", bgColor: "bg-orange-500" }
  ];

  return (
    <section id="about" className="py-20 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and user experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-background border border-border p-8 rounded-2xl card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-heart text-primary-foreground text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Welcome</h3>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to my digital portfolio. Here you'll discover highlights of my work, technical expertise, 
              and the passion that drives me as a developer. Each project represents a journey of learning and innovation.
            </p>
          </div>

          {/* Projects Card */}
          <div className="bg-background border border-border p-8 rounded-2xl card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-code-branch text-primary-foreground text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">My Projects</h3>
            <p className="text-muted-foreground leading-relaxed">
              This section showcases my project highlights and interactive demonstrations. 
              These projects span independent work, collaborative efforts, and coursework from my academic journey, 
              each solving real-world problems.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-background border border-border p-8 rounded-2xl card-hover" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-comments text-primary-foreground text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ready to collaborate or discuss opportunities? The contact section provides multiple ways to reach me, 
              including a direct communication interface for seamless networking and project discussions.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-center flex-shrink-0">
                <div className={`w-20 h-20 ${skill.bgColor} bg-opacity-20 border border-primary rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all duration-300`}>
                  <i className={`${skill.icon} text-white text-3xl`}></i>
                </div>
                <h4 className="font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
