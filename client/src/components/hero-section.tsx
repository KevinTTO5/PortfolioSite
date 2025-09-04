export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div 
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-primary rounded-full animate-float" 
          style={{ animationDelay: '-2s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-3/4 w-20 h-20 bg-primary rounded-full animate-float" 
          style={{ animationDelay: '-4s' }}
        ></div>
      </div>
      <div className="relative text-center px-6 max-w-4xl mx-auto" data-aos="fade-up">
        {/* Professional profile image with floating animation */}
        <div className="relative inline-block mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
            alt="Kevin Rodriguez - Software Engineer"
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl animate-float"
            data-testid="img-profile"
          />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <i className="fas fa-code text-primary-foreground text-lg"></i>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Kevin Rodriguez
        </h1>
        
        <div className="text-2xl md:text-3xl text-muted-foreground mb-8 typing-animation max-w-2xl mx-auto">Software Engineer • Graphics Enthusiast</div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            <i className="fab fa-react mr-2"></i>React Developer
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            <i className="fas fa-gamepad mr-2"></i>Game Development
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            <i className="fab fa-aws mr-2"></i>Cloud Architecture
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            <i className="fab fa-github mr-2"></i>Open Source
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="#projects" 
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105"
            data-testid="link-view-work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-rocket mr-2"></i>
            View My Work
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="link-connect"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-paper-plane mr-2"></i>
            Let's Connect
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-primary text-2xl"></i>
      </div>
    </section>
  );
}
