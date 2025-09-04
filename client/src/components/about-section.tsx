export default function AboutSection() {
  const skills = [
    { icon: "fab fa-cuttlefish", name: "C++" },
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-unity", name: "UE5" },
    { icon: "fab fa-aws", name: "AWS" }
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-center">
                <div className="w-20 h-20 bg-primary bg-opacity-10 border border-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${skill.icon} text-primary text-3xl`}></i>
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
