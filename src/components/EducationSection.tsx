import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { period: "2025 – 2026", title: "Master 2 – Ingénierie des Systèmes d'Information", school: "ESMT Dakar" },
  { period: "2024 – 2025", title: "Master 1 – Ingénierie des Systèmes d'Information", school: "ESMT Dakar" },
  { period: "2020 – 2023", title: "Licence pro – Réseaux et Services (Bien)", school: "ESMT Dakar" },
  { period: "2020 – 2022", title: "DTS Télécommunication (Très bien)", school: "ESMT Dakar" },
];

const certifications = [
  "Front‑end boosté à l'IA – Simplon Burkina (2026)",
  "Informatique et Internet – FORCE‑N (2025)",
  "Cloud Computing – IBM/Coursera (2025)",
  "Analyse des Données SQL – Orange Digital Center (2024)",
  "AWS Academy Cloud Foundations",
];

const EducationSection = () => (
  <section id="education" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Formation" />
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Cursus */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-accent" />
            <h3 className="font-display text-xl font-bold text-foreground">Cursus académique</h3>
          </div>
          <div className="space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={e.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="bg-card rounded-lg p-4 shadow-card border border-border"
              >
                <span className="font-body text-xs text-accent font-semibold">{e.period}</span>
                <h4 className="font-display text-sm font-bold text-foreground mt-1">{e.title}</h4>
                <p className="font-body text-xs text-muted-foreground">{e.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award size={20} className="text-accent" />
            <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
          </div>
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            {certifications.map((c) => (
              <li
                key={c}
                className="flex gap-3 items-start font-body text-sm text-muted-foreground bg-card rounded-lg p-4 shadow-card border border-border"
              >
                <span className="text-accent mt-0.5">✦</span>
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
