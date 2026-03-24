import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Plateforme de gestion de pass – BRT/TER",
    desc: "Gestion en temps réel du parcours usager : validation du pass, suivi de trajet, tarification dynamique et facturation.",
    tags: ["Spring Boot", "API REST", "Microservices"],
  },
  {
    title: "Cartographie de projets scientifiques",
    desc: "Application web pour cartographier, analyser et visualiser les projets scientifiques d'une institution.",
    tags: ["Spring Boot", "PostgreSQL"],
  },
  {
    title: "TodoList App",
    desc: "Application de gestion et suivi des tâches par statut avec interface moderne.",
    tags: ["React", "Node.js"],
  },
  {
    title: "Gestion de Clinique",
    desc: "Gestion des patients, médecins et rendez-vous : CRUD complet et journal des rendez-vous.",
    tags: ["C#", ".NET"],
  },
  {
    title: "Gestion de smartphones",
    desc: "Application CRUD avec interface réactive pour la gestion de smartphones.",
    tags: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Gestion des présences – Amazon Rekognition",
    desc: "Système de gestion des présences des étudiants par reconnaissance faciale via les services AWS (S3, DynamoDB, Lambda, Cognito, API Gateway). Accès démo : admin / admin123",
    tags: ["AWS", "React", "Rekognition", "Serverless"],
    link: "https://main.d3pfa91kl0g5kv.amplifyapp.com",
  },
  {
    title: "Partage de documents étudiants",
    desc: "Plateforme communautaire de partage de documents pour les étudiants burkinabè à l'ESMT.",
    tags: ["En cours", "Full-Stack"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Projets" subtitle="Académiques & personnels" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-base font-bold text-foreground leading-snug pr-2">
                {p.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium font-body"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
