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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-background border border-border rounded-2xl p-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  data-testid="input-message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                data-testid="button-submit-contact"
              >
                <i className={`${isSubmitting ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'} mr-2`}></i>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-background border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
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

            {/* Availability Status */}
            <div className="bg-background border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Current Status</h3>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Currently seeking new challenges in software engineering, particularly in web development, 
                game development, and cloud technologies.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>📍 Based in United States</p>
                <p>🕒 Response time: Usually within 24 hours</p>
                <p>💼 Open to: Full-time, Contract, Consulting</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Follow My Journey</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target={social.href === '#' ? undefined : "_blank"}
                    rel={social.href === '#' ? undefined : "noopener noreferrer"}
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary hover:bg-opacity-10 transition-all"
                    data-testid={`link-social-${index}`}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
