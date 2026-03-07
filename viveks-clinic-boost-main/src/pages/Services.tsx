import { Stethoscope, Activity, Heart, Shield, ThermometerSun, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Our general consultation service provides comprehensive health assessments and personalized treatment plans. Dr. Shivaram takes the time to understand your health concerns, conduct thorough examinations, and develop effective treatment strategies.",
    features: ["Complete health evaluation", "Personalized treatment plans", "Follow-up care coordination", "Referral management"],
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    desc: "Expert diabetes care with a focus on long-term management and quality of life. We offer comprehensive monitoring, diet counseling, medication management, and lifestyle guidance to help you manage diabetes effectively.",
    features: ["Blood sugar monitoring", "Diet & nutrition counseling", "Medication optimization", "Complication screening"],
  },
  {
    icon: Heart,
    title: "Hypertension Treatment",
    desc: "Effective blood pressure management through evidence-based treatment approaches. Our clinic provides regular monitoring, medication adjustments, and lifestyle modifications to keep your heart health on track.",
    features: ["Regular BP monitoring", "Medication management", "Lifestyle modification guidance", "Cardiovascular risk assessment"],
  },
  {
    icon: Shield,
    title: "Preventive Health Checkups",
    desc: "Stay ahead of health issues with our comprehensive preventive health checkup packages. Early detection is key to better outcomes, and our screenings are designed to catch potential problems before they become serious.",
    features: ["Comprehensive blood work", "Cardiac screening", "Cancer screening tests", "Customized health packages"],
  },
  {
    icon: ThermometerSun,
    title: "Fever & Infection Treatment",
    desc: "Quick and accurate diagnosis for fevers, infections, and acute illnesses. Our clinic is equipped to handle a wide range of acute conditions with prompt treatment to get you back on your feet.",
    features: ["Rapid diagnostic testing", "Antibiotic therapy", "Viral illness management", "Post-recovery follow-up"],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-primary">
        <div className="container-narrow relative z-10 text-center">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Our Medical Services</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive healthcare solutions designed to address your every health need with expertise and compassion.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-narrow space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={`space-y-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-trust shrink-0" />
                      <span className="text-foreground text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/appointment">
                    Book This Service <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className={`bg-accent/50 rounded-2xl p-10 flex items-center justify-center min-h-[280px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <s.icon className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
