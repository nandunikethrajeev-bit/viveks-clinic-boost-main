import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, label: "Email", value: "info@viveksclinic.com", href: "mailto:info@viveksclinic.com" },
    { icon: MapPin, label: "Address", value: "JP Nagar 7th Phase, Bengaluru, Karnataka 560078", href: "#map" },
    { icon: Clock, label: "Business Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM", href: undefined },
  ];

  return (
    <main>
      <section className="relative py-20 bg-primary">
        <div className="container-narrow relative z-10 text-center">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">Have questions or need help? Reach out to us — we're here to help.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Reach Out to Us</h2>
                <p className="text-muted-foreground">We're always happy to hear from you. Contact us through any of the channels below.</p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-4 rounded-xl bg-card card-elevated border border-border">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                      ) : (
                        <p className="font-medium text-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-elevated border border-border space-y-5">
                <h3 className="text-xl font-bold text-foreground">Send us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea placeholder="How can we help you?" rows={5} required />
                </div>
                <Button type="submit" className="w-full" disabled={sent}>
                  <Send className="w-4 h-4 mr-2" />
                  {sent ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="section-padding bg-card">
        <div className="container-narrow">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <iframe
              title="Viveks Multispeciality Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.5946!3d12.9074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzI2LjYiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
