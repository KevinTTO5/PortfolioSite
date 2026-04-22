type ContactMethod = {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
  download?: string;
};

export default function ContactSection() {
  const contactMethods: ContactMethod[] = [
    {
      icon: "fas fa-file-pdf",
      title: "Resume",
      subtitle: "Download PDF",
      href: "/resume.pdf",
      download: "Kevin-Rodriguez-Resume.pdf",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      subtitle: "Professional Network",
      href: "https://www.linkedin.com/in/kevin-rodriguez-098943191/",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      subtitle: "Code Repository",
      href: "https://github.com/KevinTTO5",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to collaboration and new opportunities—reach out on LinkedIn or GitHub, or grab my resume below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background border border-border rounded-2xl p-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Connect</h3>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  {...(method.download ? { download: method.download } : {})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                  data-testid={`link-${method.title.toLowerCase()}`}
                >
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary group-hover:bg-opacity-20">
                    <i className={`${method.icon} text-secondary text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{method.title}</h4>
                    <p className="text-muted-foreground">{method.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
