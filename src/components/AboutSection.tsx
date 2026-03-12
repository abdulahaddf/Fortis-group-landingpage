import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 } }
};

const certifications = [
  { src: "/assets/accordbd_logo.png", alt: "Accord Bangladesh" },
  { src: "/assets/sedex_member_logo.png", alt: "Sedex Member" },
  { src: "/assets/gots_logo.png", alt: "GOTS Certified" },
  { src: "/assets/global_recycled_standard_logo.png", alt: "Global Recycled Standard" },
];

const AboutSection = () => {
  return (
    <section className="bg-fortis-light py-24 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="text-fortis-blue text-sm uppercase tracking-[0.25em] font-semibold mb-3 block">
            who we are?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-fortis-dark leading-tight mb-6">
            A few words about us
          </h2>
          <p className="text-fortis-muted text-base leading-relaxed mb-6">
            Fortis Group is Bangladesh and Germany jointly owned apparel exporter having five owned
            production units. Currently this group has been diversified its business from mainstream
            garments industry to real estate, hotel & resort, infrastructure and agriculture.
          </p>
          <blockquote className="border-l-4 border-fortis-blue pl-6 italic text-xl font-medium text-fortis-dark mb-6">
            "We believe in the relationship more than business."
          </blockquote>
          <a href="#" className="text-fortis-blue font-semibold hover:underline">
            Read More →
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpDelayed}
        >
          <span className="text-sm uppercase tracking-widest text-fortis-muted mb-8 block">
            Our Certifications
          </span>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.alt}
                className="bg-background rounded-lg p-6 shadow-sm flex items-center justify-center h-28 hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <img src={cert.src} alt={cert.alt} className="max-h-16 object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
