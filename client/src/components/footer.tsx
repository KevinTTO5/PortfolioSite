export default function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ],
    technologies: [
      "React & Next.js",
      "Node.js & TypeScript",
      "Cloud Technologies",
      "Game Development"
    ],
    socialLinks: [
      { icon: "fab fa-github", href: "https://github.com/KevinTTO5" },
      { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/kevin-rodriguez-098943191/" },
      { icon: "fas fa-envelope", href: "mailto:kevinarodriguez255@gmail.com" }
    ]
  };

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kevin Rodriguez</h3>
            <p className="text-muted-foreground mb-4">
              Software Engineer passionate about creating innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {footerLinks.socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-social-${index}`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-primary transition-colors"
                    onClick={handleLinkClick(link.href)}
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Kevin Rodriguez. All rights reserved. Built with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}
