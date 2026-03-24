import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, Github, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "manuellaouedraogo275@gmail.com", href: "mailto:manuellaouedraogo275@gmail.com" },
  { icon: Phone, label: "+221 78 131 80 21", href: "tel:+221781318021" },
  { icon: Github, label: "github.com/kayoulou", href: "https://github.com/kayoulou" },
  { icon: MapPin, label: "Dakar, Sénégal", href: null },
];

const ContactSection = () => (
  <section id="contact" className="py-24 gradient-hero">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
          Contact
        </h2>
        <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
          N'hésitez pas à me contacter pour toute opportunité ou collaboration.
        </p>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-accent" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        {contacts.map((c, i) => {
          const Wrapper = c.href ? "a" : "div";
          const props = c.href
            ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
            : {};
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
            >
              <Wrapper
                {...(props as any)}
                className="flex items-center gap-4 p-5 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 hover:bg-primary-foreground/15 transition-colors"
              >
                <c.icon size={20} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground">{c.label}</span>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactSection;
