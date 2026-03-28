import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];
const servicesList = ["General Consultation", "Diabetes Management", "Hypertension Treatment", "Preventive Health Checkup", "Fever & Infection Treatment"];

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (!name) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    emailjs.sendForm(
  "service_dsax6hq",      // your Service ID
  "template_gkvz2mg",       // your Template ID
  e.currentTarget,
  "yX2r3pMLaYhtDxOuD"
)
.then(() => {
  setSubmitted(true);
})
.catch((error) => {
  console.log("Email error:", error);
});
  };

  if (submitted) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center section-padding">
        <div className="text-center space-y-4 max-w-md animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-trust" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Appointment Submitted ✅</h1>
          <p className="text-muted-foreground">Your appointment request has been received.</p>
          <p className="text-muted-foreground">Our clinic will contact you shortly to confirm your booking.</p>
          <p className="text-sm text-gray-500 mt-2">For urgent cases, please call us directly.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Book Another Appointment</Button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="relative py-20 bg-primary">
        <div className="container-narrow relative z-10 text-center">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-2">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Book an Appointment</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">Schedule your visit with Dr. Shivaram HR. Fill in the form below and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 card-elevated border border-border space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name *</label>
                <Input name="name" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number *</label>
                <Input name="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <Input name="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Preferred Date *</label>
                <Input name="date" type="date" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Preferred Time *</label>
                <Select name="time" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Service *</label>
              <Select name="service" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {servicesList.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Additional Notes</label>
              <Textarea name="message" placeholder="Any specific concerns or notes for the doctor..." rows={4} />
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              <Calendar className="w-5 h-5 mr-2" />
              Request Appointment
            </Button>

            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>We'll confirm your appointment within 24 hours</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
