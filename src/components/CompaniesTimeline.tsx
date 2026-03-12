import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { slideLeft, slideRight, fadeUp } from "@/lib/animations";

const companies = [
  {
    name: "KA Design Ltd.",
    year: 2008,
    image: "/assets/ka_design_thumb.jpg",
    tag: "Garments Manufacturing",
    short: "Established in 2008, KA Design produces high quality knit/woven sports & outerwear garments.",
    full: "KA Design Limited, a private company limited by shares was established in 2008 in Bangladesh which is capable of producing a wide range of high quality knit/woven sports & outwears garments products.",
  },
  {
    name: "Fortis Garments Ltd.",
    year: 2010,
    image: "/assets/fortis_garments_ltd_thumb.jpg",
    tag: "Export Manufacturing",
    short: "Fortis Garments exports premium sportswear to Europe, North America, Australia and Africa.",
    full: "Fortis Garments Limited was established in 2010 in Bangladesh, capable of producing wider range of high quality knit/woven sports & outwears garments products with annual export of US$ 6.71 million.",
  },
  {
    name: "Sarah Resort",
    year: 2015,
    image: "/assets/sarah_resorts_thumb.jpg",
    tag: "Hospitality",
    short: "A nature-friendly resort with modern luxury facilities near the historical Bhawal Rajabari, Gazipur.",
    full: "Discover Sarah Resort — a unique intermingling of nature friendly yet designed with all modern state of art equipment and luxury facilities, located in the historical Bhawal Rajabari in the district of Gazipur, approximately 1½ hours drive from Dhaka.",
  },
  {
    name: "Habitus Fashion Ltd.",
    year: 2014,
    image: "/assets/habitus_thumb.jpg",
    tag: "Largest Factory",
    short: "Our flagship factory built to the highest European safety standards, operating since spring 2014.",
    full: "Our largest factory, Habitus Fashion Ltd. has been in operation since spring 2014. It is a modern production building built according to the highest European safety standards. Its workforce comprises local skilled workers, qualified technicians, and experienced foreign expatriates maintaining the highest standards of quality.",
  },
  {
    name: "Arrow Fabrics Ltd.",
    year: 2017,
    image: "/assets/arrow_design_thumb.jpg",
    tag: "Denim & Woven",
    short: "Specialised Denim/woven garment manufacturer located at Karnaphuli Export Processing Zone, Chittagong.",
    full: "Arrow Fabrics (Pvt) Limited was established in Bangladesh, capable of producing a wider range of high quality Denim/woven sports & outwear garments for export to Europe, North America, Australia and Africa. Located at KEPZ, Chittagong, with 30 garment production lines.",
  },
  {
    name: "Quattro Fashion Ltd.",
    year: 2018,
    image: "/assets/quattro_fashion_thumb.jpg",
    tag: "Latest Venture",
    short: "Fortis Group's most modern factory with fully automated machinery and a global marketing office in Canada.",
    full: "Quattro Fashion Ltd. is the latest venture of Fortis Group. This modern manufacturing plant has been established to cater to contemporary customers with uplifting high-quality satisfaction. All new machinery and appliances (automated and semi-automated) are installed for exceptional quality production.",
  },
  {
    name: "Fortis Downtown Resort",
    year: 2018,
    image: "/assets/fortis_club_thumb.jpg",
    tag: "Hospitality",
    short: "A marvellous architectural resort hosting weddings, celebrations, pre/post-wedding shoots and honeymoons.",
    full: "The marvellous architecturally designed Fortis Downtown Resort offers a lovely environment for guests, especially for those who love photography. Always open to host Wedding Festivals, Pre/Post Wedding shoots, Birthday, Anniversary celebrations and Honeymoon packages.",
  },
  {
    name: "Fortis Football Club",
    year: 2010,
    image: "/assets/fortis_football_club_thumb.jpg",
    tag: "Sports & Community",
    short: "A community-driven football club representing the Fortis Group's commitment to sports and society.",
    full: "Fortis Football Club, established in 2010, represents the group's commitment to community development and sports promotion in Bangladesh.",
  },
  {
    name: "Fortis Real Estate",
    year: 2010,
    image: "/assets/fortis_realestate_thumb.jpg",
    tag: "Real Estate",
    short: "Platinum Fortis Residence — a sanctuary of timeless elegance and sophisticated living.",
    full: "Fortis Real Estate develops Platinum Fortis Residence — a sanctuary for families seeking timeless elegance around the rituals of sophisticated living. Every location meets aspirations with inspirations, engulfed by the tranquil peace of nature, redefining expectations of community and luxury living.",
  },
];

// Sort companies by year (latest first)
const sortedCompanies = [...companies].sort((a, b) => b.year - a.year);

// Smooth spring config — low stiffness & matched damping for fluid scroll tracking
const SMOOTH_SPRING = { stiffness: 45, damping: 16, restDelta: 0.001 };

const CompaniesTimeline = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, SMOOTH_SPRING);

  return (
    <section className="bg-fortis-light py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeUp}
        >
          <span className="text-fortis-blue text-sm uppercase tracking-[0.25em] font-semibold">
            how we do things?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-fortis-dark mt-2 mb-4">
            About our companies
          </h2>
          <p className="text-fortis-muted max-w-2xl text-base mb-16">
            Fortis Group operates across garments, hospitality, real estate and agriculture — a
            diversified conglomerate built on trust.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline Spine (Background) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-[3px] bg-fortis-border h-full top-0 rounded-full" />

          {/* Animated Progress Line — broader & smooth spring */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-[3px] bg-fortis-blue h-full top-0 origin-top rounded-full z-0"
            style={{ scaleY }}
          />

          <div className="space-y-12 relative z-10">
            {sortedCompanies.map((company, i) => (
              <TimelineItem
                key={`${company.name}-${i}`}
                company={company}
                index={i}
                isExpanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  company,
  index,
  isExpanded,
  onToggle,
}: {
  company: (typeof companies)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const isLeft = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);

  // Track scroll progress: ring starts filling when item enters viewport (85%),
  // completes when the dot reaches near-center of screen (55%)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 88%", "center 52%"],
  });

  // Smooth spring — matches main spine for cohesive feel
  const rawPathLength = useSpring(scrollYProgress, SMOOTH_SPRING);

  // Clamp to [0, 1] to avoid overshoot artifacts
  const pathLength = useTransform(rawPathLength, (v) => Math.min(1, Math.max(0, v)));

  // Dot fill opacity: fades in as ring nears completion
  const dotOpacity = useTransform(pathLength, [0.7, 1], [0, 1]);

  return (
    <motion.div
      ref={itemRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={isLeft ? slideLeft : slideRight}
      className={`relative flex items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Timeline Point Wrapper */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-fortis-blue font-bold text-sm mb-2 bg-fortis-light px-2 rounded-md">
          {company.year}
        </span>

        {/* Ring + Dot — 40×40 container so stroke doesn't clip */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* SVG ring: starts from top (-rotate-90), fills clockwise */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 40 40">
            {/* Static track ring */}
            <circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="hsl(var(--fortis-border))"
              strokeWidth="2.5"
            />
            {/* Animated fill ring — pathLength drives the draw */}
            <motion.circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="hsl(var(--fortis-blue))"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Center dot — opaque solid fill, glows when ring completes */}
          <div className="relative z-10 w-4 h-4 rounded-full border-2 border-fortis-blue bg-white transition-all duration-300">
            <motion.div
              className="absolute inset-0 rounded-full bg-fortis-blue"
              style={{ opacity: dotOpacity }}
            />
          </div>
        </div>
      </div>

      {/* Spacer for mobile */}
      <div className="w-16 md:hidden shrink-0" />

      {/* Card Content */}
      <div
        className={`md:w-[45%] w-full ${isLeft ? "md:pr-12" : "md:pl-12"} ${
          isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
        }`}
      >
        <div
          onClick={onToggle}
          className={`bg-background rounded-xl shadow-sm p-6 border cursor-pointer transition-all duration-300 ${
            isExpanded
              ? "border-fortis-blue shadow-lg shadow-fortis-blue/10"
              : "border-transparent hover:border-fortis-blue hover:shadow-lg hover:shadow-fortis-blue/10"
          }`}
        >
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
            loading="lazy"
          />
          <span className="text-xs bg-fortis-blue/10 text-fortis-blue font-medium px-3 py-1 rounded-full inline-block mb-2">
            {company.tag}
          </span>
          <h3 className="text-xl font-bold text-fortis-dark mb-1">{company.name}</h3>
          <p className="text-fortis-muted text-xs mb-3">Founded {company.year}</p>
          <p className="text-fortis-muted text-sm leading-relaxed">{company.short}</p>

          <button className="text-fortis-blue text-xs font-semibold mt-3">
            {isExpanded ? "− Show Less" : "+ Show More"}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-foreground text-sm leading-relaxed mt-3 pt-3 border-t border-fortis-border">
                  {company.full}
                </p>
                <a
                  href="#"
                  className="text-fortis-blue text-sm font-semibold hover:underline mt-4 inline-block"
                >
                  Discover Now →
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CompaniesTimeline;
