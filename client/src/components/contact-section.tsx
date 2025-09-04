import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission logic with email service
      // For now, simulate submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      subtitle: "kevinarodriguez255@gmail.com",
      href: "mailto:kevinarodriguez255@gmail.com"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      subtitle: "Professional Network",
      href: "https://www.linkedin.com/in/kevin-rodriguez-098943191/"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      subtitle: "Code Repository",
      href: "https://github.com/KevinTTO5"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/KevinTTO5" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/kevin-rodriguez-098943191/" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-dev", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, discuss opportunities, or just say hello? I'd love to hear from you.
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
                  target={method.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={method.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
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
