import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Stagiaire Superviseur NOC",
    company: "NetForce – Ouagadougou",
    period: "Mai 2024 – Oct. 2024",
    tasks: [
      "Monitoring en temps réel des sites et équipements réseau",
      "Coordination des dépannages terrain et installations",
      "Gestion des plaintes clients et suivi jusqu'à résolution",
      "Animation des réunions hebdomadaires de revue des incidents",
    ],
  },
  {
    role: "Stagiaire Technicienne Fibre Optique",
    company: "Moov-Africa (CNMO) – Ouagadougou",
    period: "Juin 2023 – Août 2023",
    tasks: [
      "Tirage du câble fibre optique",
      "Raccordement des points de branchement et boitiers de protection",
    ],
  },
  {
    role: "Stagiaire Technicienne",
    company: "Moov-Africa (CMR) – Ouagadougou",
    period: "Juil. 2022 – Sept. 2022",
    tasks: [
      "Maintenance et exploitation des équipements Radio",
      "Supervision des différents sites du réseau mobile",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 bg-secondary/40">
    <div className="container mx-auto px-6">
      <SectionHeading title="Expérience" subtitle="Mon parcours professionnel" />
      <div className="max-w-2xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-6 border-l-2 border-accent/20"
          >
            <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
            <span className="font-body text-[11px] text-accent font-semibold uppercase tracking-[0.15em]">
              {exp.period}
            </span>
            <h3 className="font-display text-base font-semibold text-foreground mt-1 tracking-tight">{exp.role}</h3>
            <p className="font-body text-xs text-muted-foreground mb-2">{exp.company}</p>
            <ul className="space-y-1">
              {exp.tasks.map((t, idx) => (
                <li key={idx} className="font-body text-xs text-muted-foreground flex gap-2">
                  <span className="text-accent/50 mt-0.5">–</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
