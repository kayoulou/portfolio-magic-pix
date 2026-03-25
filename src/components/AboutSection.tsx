import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Localisation", value: "Dakar, Sénégal" },
  { icon: GraduationCap, label: "Formation", value: "Master 2 – ESMT Dakar" },
  { icon: Briefcase, label: "Spécialisation", value: "Full-Stack & API" },
];

const AboutSection = () => (
  <section id="about" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <SectionHeading title="À propos" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-body text-base text-muted-foreground leading-[1.8] text-center mb-14">
          Étudiante en fin de cycle Master en Ingénierie des Systèmes d'Information,
          je me spécialise dans la conception d'architectures logicielles robustes et le
          développement d'applications Web performantes. Passionnée par l'ingénierie logicielle,
          je maîtrise les cycles de développement Front‑end et Back‑end.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2.5 p-5 rounded-xl bg-secondary/50"
            >
              <h.icon size={18} className="text-accent" />
              <span className="font-display text-xs font-semibold text-foreground uppercase tracking-wide">{h.label}</span>
              <span className="font-body text-sm text-muted-foreground text-center">{h.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
