import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects: { title: string; desc: string; tags: string[]; link?: string }[] = [
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
    desc: "Système de gestion des présences des étudiants par reconnaissance faciale via les services AWS (S3, DynamoDB, Lambda, Cognito, API Gateway).\n\nAdmin : admin@admin.com / Admin1234#\nEnseignant : edem@esmt.sn / Admin1234#",
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
  <section id="projects" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <SectionHeading title="Projets" subtitle="Académiques & personnels" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group rounded-xl p-5 bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display text-sm font-semibold text-foreground leading-snug pr-2 tracking-tight">
                {p.title}
              </h3>
              {p.link && <ArrowUpRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />}
            </div>
            <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">
              {p.desc}
            </p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs text-accent hover:underline underline-offset-2 mb-3"
              >
                <ExternalLink size={12} />
                Voir le projet
              </a>
            )}
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-accent/8 text-accent text-[11px] font-medium font-body"
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
