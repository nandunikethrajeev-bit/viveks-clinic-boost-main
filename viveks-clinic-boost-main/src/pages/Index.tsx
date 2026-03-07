import { Link } from "react-router-dom";
import { Star, Phone, Calendar, Award, Clock, Users, Stethoscope, Heart, Activity, Shield, ThermometerSun, CheckCircle2, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import doctorImage from "@/assets/doctor-portrait.jpg";

const stars = Array(5).fill(0);

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Comprehensive health evaluation and treatment plans tailored to your needs." },
  { icon: Activity, title: "Diabetes Management", desc: "Expert monitoring and management of diabetes with personalized care plans." },
  { icon: Heart, title: "Hypertension Treatment", desc: "Effective blood pressure management with modern treatment approaches." },
  { icon: Shield, title: "Preventive Health Checkups", desc: "Regular screenings and health assessments to keep you at your best." },
  { icon: ThermometerSun, title: "Fever & Infection Treatment", desc: "Quick diagnosis and treatment for fevers, infections, and acute illnesses." },
];

const whyUs = [
  { icon: Award, title: "16+ Years Experience", desc: "Decades of clinical expertise you can trust" },
  { icon: Users, title: "Patient-Centered Care", desc: "Your comfort and health come first, always" },
  { icon: Stethoscope, title: "Modern Diagnostics", desc: "State-of-the-art equipment for accurate results" },
  { icon: CheckCircle2, title: "500+ Trusted Patients", desc: "A growing community of satisfied patients" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Dr. Shivaram is incredibly thorough and caring. He takes the time to explain everything clearly. Best physician in JP Nagar!", rating: 5 },
  { name: "Rajesh Kumar", text: "I've been visiting Viveks Clinic for my diabetes management for 3 years. The results have been outstanding. Highly recommended!", rating: 5 },
  { name: "Ananya Reddy", text: "The clinic is clean, well-maintained, and the staff is very professional. Dr. Shivaram's preventive health checkup saved me from a serious condition.", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern medical clinic interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-2">
              {stars.map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-star text-star" />
              ))}
              <span className="text-primary-foreground/80 text-sm ml-1">4.8 (567 Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Trusted General Physician in JP Nagar
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
              Dr. Shivaram HR — MBBS, MD, DNB, FIPC. 16+ years of dedicated healthcare excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={doctorImage} alt="Dr. Shivaram HR" className="rounded-2xl w-full max-w-md mx-auto shadow-xl" />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg hidden md:block">
                <span className="text-2xl font-bold">16+</span>
                <span className="text-sm block opacity-90">Years Experience</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About the Doctor</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dr. Shivaram HR</h2>
                <p className="text-muted-foreground mt-1">MBBS, MD, DNB, FIPC</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With over 16 years of clinical experience, Dr. Shivaram HR is a trusted name in general medicine in Bengaluru. His patient-first approach, combined with deep medical expertise, ensures every patient receives comprehensive and compassionate care.
              </p>
              <div className="space-y-3">
                {["Former WHO Consultant", "Former Apollo Clinics Consultant", "Specialist in Internal Medicine"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-trust shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" asChild>
                <Link to="/doctor">Learn More About Dr. Shivaram</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Healthcare Solutions</h2>
            <p className="text-muted-foreground mt-3">Expert medical care across a wide range of specialties, all under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 card-elevated border border-border group">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Button size="sm" variant="ghost" asChild className="text-primary hover:text-primary px-0">
                  <Link to="/appointment">Book Now →</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Healthcare You Can Trust</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-background card-elevated border border-border">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Patient Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              {stars.map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-star text-star" />
              ))}
              <span className="font-semibold text-foreground ml-1">4.8</span>
              <span className="text-muted-foreground text-sm">(567 Reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 card-elevated border border-border">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-star text-star" />
                  ))}
                </div>
                <p className="font-semibold text-foreground mt-2 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Visit Our Clinic</h2>
            <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">JP Nagar 7th Phase, Bengaluru, Karnataka</span>
            </div>
          </div>
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

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container-narrow relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Take Charge of Your Health?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Schedule an appointment with Dr. Shivaram HR today and experience healthcare that puts you first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-base px-8">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
