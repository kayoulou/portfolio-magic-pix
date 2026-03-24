import { motion } from "framer-motion";
import { Github, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-illustration.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-primary/85" />

    <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center gap-12 pt-24 pb-16">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="font-body text-accent text-sm uppercase tracking-widest mb-3">
          Développeuse Full-Stack
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Josée Manuella
          <br />
          <span className="text-accent">OUEDRAOGO</span>
        </h1>
        <p className="font-body text-primary-foreground/80 max-w-lg text-lg leading-relaxed mb-8">
          Étudiante en Master Ingénierie des Systèmes d'Information, passionnée par
          l'architecture logicielle et le développement d'applications Web performantes.
        </p>
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/kayoulou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg gradient-accent text-accent-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-display font-medium text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>
      </motion.div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full gradient-accent p-1">
          <div className="w-full h-full rounded-full bg-primary overflow-hidden flex items-end justify-center">
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

    {/* Scroll indicator */}
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
