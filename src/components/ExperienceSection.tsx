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
  <section id="experience" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <SectionHeading title="Expérience" subtitle="Mon parcours professionnel" />
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="relative pl-12 md:pl-16 pb-12 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full gradient-accent border-2 border-background" />

            <span className="font-body text-xs text-accent font-semibold uppercase tracking-wider">
              {exp.period}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground mt-1">{exp.role}</h3>
            <p className="font-body text-sm text-muted-foreground mb-3">{exp.company}</p>
            <ul className="space-y-1.5">
              {exp.tasks.map((t, idx) => (
                <li key={idx} className="font-body text-sm text-muted-foreground flex gap-2">
                  <span className="text-accent mt-1">•</span>
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
