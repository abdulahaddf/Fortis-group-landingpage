import { motion } from "framer-motion";
import { staggerContainer, scaleIn, fadeUp } from "@/lib/animations";

const products = [
  { name: "Fleece & Sherpa", image: "/assets/flees_sherpa_thumb.jpg" },
  { name: "Hiking", image: "/assets/hiking.jpg" },
  { name: "Hunting", image: "/assets/huntingwear.jpg" },
  { name: "Insulated & Down", image: "/assets/insulated_down.jpg" },
  { name: "Rain Wear", image: "/assets/rainwear.jpg" },
  { name: "Ski Wear", image: "/assets/ski_wear.jpg" },
  { name: "Cycling Wear", image: "/assets/cyclingwear.jpg" },
  { name: "Active Wear", image: "/assets/activewear.jpg" },
  { name: "Casual Wear", image: "/assets/casualwear.jpg" },
  { name: "Denim Wear", image: "/assets/denimwear.jpg" },
  { name: "Medical Wear", image: "/assets/medicalwear.jpg" },
  { name: "Swim Wear", image: "/assets/swimwear.jpg" },
];

const ProductsGrid = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.01 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto"
      >
        <span className="text-fortis-blue text-sm uppercase tracking-[0.25em] font-semibold">
          what we do?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-fortis-dark mt-2 mb-4">
          A few things we are good at
        </h2>
        <p className="text-fortis-muted max-w-2xl text-base leading-relaxed mb-12">
          We are a trusted manufacturer at home & abroad in terms of activewear, all types of
          sports & activity wear, outerwear, casualwear etc.
        </p>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={scaleIn}
              className="relative overflow-hidden rounded-lg h-84 cursor-pointer group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-fortis-dark/40 group-hover:bg-fortis-dark/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-fortis-dark/80 to-transparent">
                <span className="text-primary-foreground font-semibold text-sm tracking-wide block">
                  {product.name}
                </span>
                <span className="text-fortis-blue text-xs font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 block mt-1">
                  Find More →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductsGrid;
