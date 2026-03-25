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
  <section id="education" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <SectionHeading title="Formation" />
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-accent" />
            <h3 className="font-display text-base font-semibold text-foreground tracking-tight">Cursus académique</h3>
          </div>
          <div className="space-y-3">
            {education.map((e, i) => (
              <motion.div
                key={e.period}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="p-4 rounded-lg bg-secondary/50"
              >
                <span className="font-body text-[11px] text-accent font-semibold">{e.period}</span>
                <h4 className="font-display text-sm font-semibold text-foreground mt-0.5 tracking-tight">{e.title}</h4>
                <p className="font-body text-xs text-muted-foreground">{e.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award size={18} className="text-accent" />
            <h3 className="font-display text-base font-semibold text-foreground tracking-tight">Certifications</h3>
          </div>
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            {certifications.map((c) => (
              <li
                key={c}
                className="flex gap-2.5 items-start font-body text-sm text-muted-foreground p-3 rounded-lg bg-secondary/50"
              >
                <span className="text-accent text-xs mt-0.5">✦</span>
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
