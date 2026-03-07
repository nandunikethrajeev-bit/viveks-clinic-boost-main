import { Award, BookOpen, Briefcase, CheckCircle2, GraduationCap, Heart, Star, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-portrait.jpg";

const qualifications = [
  "MBBS – Bachelor of Medicine and Surgery",
  "MD – Doctor of Medicine (Internal Medicine)",
  "DNB – Diplomate of National Board",
  "FIPC – Fellow of Indian Pediatric Cardiology",
];

const timeline = [
  { year: "2008–2012", title: "WHO Consultant", desc: "Served as a medical consultant for the World Health Organization, contributing to public health initiatives." },
  { year: "2012–2018", title: "Apollo Clinics Consultant", desc: "Practiced as a senior consultant at Apollo Clinics, treating thousands of patients across specialties." },
  { year: "2018–Present", title: "Viveks Multispeciality Clinic", desc: "Founded and leads Viveks Clinic in JP Nagar, providing comprehensive healthcare to the community." },
];

const Doctor = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Meet Your Doctor</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Dr. Shivaram HR</h1>
              <p className="text-primary-foreground/70 text-lg">MBBS, MD, DNB, FIPC</p>
              <p className="text-primary-foreground/80 leading-relaxed">
                A compassionate and experienced physician dedicated to providing the highest standard of medical care. With over 16 years of clinical practice, Dr. Shivaram combines evidence-based medicine with a deeply personal approach to patient care.
              </p>
              <div className="flex items-center gap-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
                <span className="text-primary-foreground/70 text-sm ml-1">4.8 (567 Reviews)</span>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/appointment">Book an Appointment</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img src={doctorImage} alt="Dr. Shivaram HR" className="rounded-2xl max-w-sm w-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Qualifications & Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {qualifications.map((q) => (
              <div key={q} className="flex items-start gap-3 p-5 rounded-xl bg-background card-elevated border border-border">
                <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Biography</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">A Career Dedicated to Healing</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Dr. Shivaram HR embarked on his medical journey with a deep-rooted passion for helping people. After completing his MBBS from a premier medical institution, he pursued his MD in Internal Medicine, followed by DNB certification, solidifying his expertise in the field.
            </p>
            <p>
              His distinguished career includes serving as a consultant for the World Health Organization (WHO), where he contributed to impactful public health initiatives. He further honed his clinical skills at Apollo Clinics, one of India's most respected healthcare networks, where he treated thousands of patients across diverse medical conditions.
            </p>
            <p>
              In 2018, Dr. Shivaram founded Viveks Multispeciality Clinic in JP Nagar, Bengaluru, with a vision to bring world-class healthcare closer to the community. His approach blends modern medical science with compassionate patient care, earning him the trust of over 500 patients and a stellar 4.8-star rating.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-primary font-semibold">{t.year}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{t.title}</h3>
                  <p className="text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctor;
