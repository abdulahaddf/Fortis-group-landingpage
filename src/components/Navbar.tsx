import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  "Home", "Who We Are", "Products", "Our Companies",
  "Brands We Work With", "Sustainability", "CSR",
  "News & Media", "Careers", "Contact Us"
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background shadow-md" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 md:px-20 py-4">
          <img
            src={scrolled ? "/assets/logo_stick.png" : "/assets/logo.png"}
            alt="Fortis Group"
            className="w-[120px] md:w-[160px] transition-all duration-300"
          />
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                } hover:text-fortis-blue group`}
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-fortis-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-fortis-dark flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="text-primary-foreground" size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-primary-foreground text-lg font-medium tracking-wide hover:text-fortis-blue transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
