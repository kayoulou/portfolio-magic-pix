import { motion } from "framer-motion";
import { Github, Mail, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile-illustration.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
    {/* Subtle grain overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

    <div className="container relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center gap-16 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-center md:text-left"
      >
        <p className="font-body text-accent text-xs uppercase tracking-[0.2em] mb-4 font-medium">
          Développeuse Full-Stack
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.1] mb-6 tracking-tight">
          Josée Manuella
          <br />
          <span className="text-gradient">OUEDRAOGO</span>
        </h1>
        <p className="font-body text-primary-foreground/60 max-w-md text-base leading-relaxed mb-10">
          Étudiante en Master Ingénierie des Systèmes d'Information, passionnée par
          l'architecture logicielle et le développement d'applications Web performantes.
        </p>
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <a
            href="https://github.com/kayoulou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary-foreground/20 text-primary-foreground/80 font-body font-medium text-sm hover:bg-primary-foreground/5 transition-colors"
          >
            <Mail size={16} />
            Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="flex-shrink-0"
      >
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-accent/20 p-[3px]">
          <div className="w-full h-full rounded-full bg-foreground/10 overflow-hidden flex items-end justify-center backdrop-blur-sm">
            <img
              src={profileImg}
              alt="Illustration de Manuella"
              className="w-4/5 object-contain"
              width={512}
              height={512}
            />
          </div>
        </div>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/30 animate-bounce"
    >
      <ArrowDown size={20} />
    </motion.a>
  </section>
);

export default HeroSection;
