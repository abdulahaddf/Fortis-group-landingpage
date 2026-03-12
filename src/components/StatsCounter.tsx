import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const stats = [
  { target: 12781, suffix: "", label: "Employees across five companies" },
  { target: 60, suffix: " million", label: "Pieces of garments made per year" },
  { target: 8, suffix: " brands", label: "We are proud partner of" },
  { target: 203, suffix: " million US$", label: "Yearly revenue from renowned brands" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return count;
}

const StatCard = ({ stat, inView, isLast }: { stat: typeof stats[0]; inView: boolean; isLast: boolean }) => {
  const count = useCountUp(stat.target, inView);
  return (
    <div className={`text-center py-8 ${!isLast ? "md:border-r md:border-primary-foreground/10" : ""}`}>
      <div className="leading-none">
        <span className="text-5xl md:text-7xl font-extrabold text-primary-foreground">
          {count.toLocaleString()}
        </span>
        <span className="text-fortis-blue text-2xl md:text-3xl font-bold">{stat.suffix}</span>
      </div>
      <p className="text-fortis-muted text-sm mt-2 max-w-[120px] mx-auto text-center">
        {stat.label}
      </p>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-fortis-dark py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i} transition={{ delay: i * 0.1 }}>
              <StatCard stat={stat} inView={inView} isLast={i === stats.length - 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
