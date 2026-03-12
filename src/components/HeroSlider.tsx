import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/assets/home_slide_02.jpg",
    label: "WELCOME TO",
    heading: "Fortis Group",
    subheading: "A Group With True Forward Thinking Vision",
    cta: "Discover More",
  },
  {
    image: "/assets/home_slide_01.jpg",
    label: "SINCE 2009",
    heading: "Global Manufacturing Excellence",
    subheading: "Bangladesh & Germany jointly owned apparel exporter",
    cta: "Our Products",
  },
  {
    image: "/assets/home_slide_03.jpg",
    label: "TRUSTED WORLDWIDE",
    heading: "Beyond Garments",
    subheading: "Diversified into Real Estate, Hospitality, Infrastructure & Agriculture",
    cta: "Our Companies",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-fortis-dark">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-fortis-dark/55" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase font-medium mb-4"
            >
              {slide.label}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-6"
            >
              {slide.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-8"
            >
              {slide.subheading}
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-fortis-blue text-primary-foreground px-8 py-3 rounded-none font-semibold tracking-wider hover:bg-primary-foreground hover:text-fortis-blue transition-all duration-300"
            >
              {slide.cta}
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary-foreground/10 z-20">
        <div key={key} className="h-full bg-fortis-blue animate-progress" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setKey((p) => p + 1); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-fortis-blue" : "w-2 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="text-primary-foreground animate-bounce-subtle" size={24} />
      </div>
    </section>
  );
};

export default HeroSlider;
