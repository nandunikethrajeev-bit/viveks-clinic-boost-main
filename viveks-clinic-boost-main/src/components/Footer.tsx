import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-lg">Viveks Clinic</span>
            </div>
            <p className="text-sm opacity-70">
              Trusted multispeciality healthcare in JP Nagar, Bengaluru. Led by Dr. Shivaram HR with 16+ years of experience.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Doctor", "Services", "Appointment", "Contact"].map((l) => (
                <li key={l}>
                  <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Services</h4>
            <ul className="space-y-2">
              {["General Consultation", "Diabetes Management", "Hypertension Treatment", "Preventive Health Checkups", "Fever & Infection Treatment"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-70" />
                <span className="text-sm opacity-70">JP Nagar 7th Phase, Bengaluru, Karnataka</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@viveksclinic.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                  <Mail className="w-4 h-4 shrink-0" />
                  info@viveksclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">&copy; 2026 Viveks Multispeciality Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
