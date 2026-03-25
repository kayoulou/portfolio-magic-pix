import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-16 text-center"
  >
    <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="font-body text-sm text-muted-foreground">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
