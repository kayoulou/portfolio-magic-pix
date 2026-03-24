import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Localisation", value: "Dakar, Sénégal" },
  { icon: GraduationCap, label: "Formation", value: "Master 2 – ESMT Dakar" },
  { icon: Briefcase, label: "Spécialisation", value: "Full-Stack & API" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="À propos" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <p className="font-body text-lg text-muted-foreground leading-relaxed text-center mb-12">
          Étudiante en fin de cycle Master en Ingénierie des Systèmes d'Information,
          je me spécialise dans la conception d'architectures logicielles robustes et le
          développement d'applications Web performantes. Passionnée par l'ingénierie logicielle,
          je maîtrise les cycles de développement Front‑end et Back‑end.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card shadow-card border border-border"
            >
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                <h.icon size={20} className="text-accent-foreground" />
              </div>
              <span className="font-display text-sm font-semibold text-foreground">{h.label}</span>
              <span className="font-body text-sm text-muted-foreground text-center">{h.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
