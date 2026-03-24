import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Front-end",
    skills: ["React.js", "Angular", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Back-end & API",
    skills: ["Java / Spring Boot", "Node.js", "API REST"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Git/GitHub", "CI/CD", "AWS"],
  },
  {
    title: "Bases de données",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "H2", "NoSQL"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <SectionHeading title="Compétences" subtitle="Mon stack technique actuel" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300"
          >
            <h3 className="font-display text-base font-bold text-foreground mb-4">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 rounded-full bg-secondary text-xs font-body font-medium text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
