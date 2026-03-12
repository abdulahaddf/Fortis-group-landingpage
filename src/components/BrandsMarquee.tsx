const brands = [
  { src: "/assets/brand_soliver.png", alt: "s.Oliver" },
  { src: "/assets/brand_mns.png", alt: "Marks & Spencer" },
  { src: "/assets/brand_cna.png", alt: "C&A" },
  { src: "/assets/brand_next.png", alt: "Next" },
  { src: "/assets/brand_zara.png", alt: "Zara" },
  { src: "/assets/brand_hnm.png", alt: "H&M" },
];

const BrandsMarquee = () => {
  const row = brands.concat(brands);

  return (
    <section className="bg-background py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <span className="text-fortis-blue text-sm uppercase tracking-[0.25em] font-semibold text-center block">
          our customers
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-fortis-dark text-center mt-2 mb-3">
          Brands we work with
        </h2>
        <p className="text-fortis-muted text-center max-w-xl mx-auto mb-12">
          We have been working with world renowned brands across all continents since 2009.
        </p>

        {/* Row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee pause-on-hover w-max">
            {row.map((brand, i) => (
              <div
                key={`r1-${i}`}
                className="bg-background rounded-xl shadow-sm border border-fortis-border px-8 py-4 h-20 flex items-center justify-center mx-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300 shrink-0"
              >
                <img src={brand.src} alt={brand.alt} className="max-h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — reverse */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee-reverse pause-on-hover w-max">
            {row.map((brand, i) => (
              <div
                key={`r2-${i}`}
                className="bg-background rounded-xl shadow-sm border border-fortis-border px-8 py-4 h-20 flex items-center justify-center mx-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300 shrink-0"
              >
                <img src={brand.src} alt={brand.alt} className="max-h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
