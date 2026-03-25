import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "manuellaouedraogo275@gmail.com", href: "mailto:manuellaouedraogo275@gmail.com" },
  { icon: Phone, label: "+221 78 131 80 21", href: "tel:+221781318021" },
  { icon: Github, label: "github.com/kayoulou", href: "https://github.com/kayoulou" },
  { icon: MapPin, label: "Dakar, Sénégal", href: null },
];

const ContactSection = () => (
  <section id="contact" className="py-28 gradient-hero">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-2 tracking-tight">
          Contact
        </h2>
        <p className="font-body text-sm text-primary-foreground/50">
          N'hésitez pas à me contacter pour toute opportunité ou collaboration.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
        {contacts.map((c, i) => {
          const Wrapper = c.href ? "a" : "div";
          const props = c.href
            ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
            : {};
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Wrapper
                {...(props as any)}
                className="flex items-center gap-3 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/8 hover:bg-primary-foreground/10 transition-colors"
              >
                <c.icon size={16} className="text-accent flex-shrink-0" />
                <span className="font-body text-xs text-primary-foreground/80">{c.label}</span>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactSection;
