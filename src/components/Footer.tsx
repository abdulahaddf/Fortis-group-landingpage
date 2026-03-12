import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const quickLinks = [
  "Home", "Who We Are", "Products", "Our Companies",
  "Brands We Work With", "Sustainability", "CSR",
  "News & Media", "Careers", "Contact Us",
];

const Footer = () => {
  return (
    <footer className="bg-fortis-dark text-primary-foreground pt-20 pb-8 px-6 md:px-20 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src="/assets/logo.png" alt="Fortis Group" className="w-[140px] mb-6" />
            <p className="text-fortis-muted text-sm leading-relaxed max-w-xs mb-6">
              "We believe in the relationship more than business."
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-fortis-muted hover:text-fortis-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-fortis-muted hover:text-fortis-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-fortis-muted hover:text-fortis-blue transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground text-sm font-semibold uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-fortis-muted text-sm hover:text-fortis-blue transition-colors leading-8"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-primary-foreground text-sm font-semibold uppercase tracking-widest mb-6">
              Head Office
            </h4>
            <p className="text-primary-foreground text-sm font-medium mb-1">TexFortis Germany GmbH</p>
            <p className="text-fortis-muted text-sm leading-relaxed mb-2">
              Bersenbrücker Str. 20, 49434 Neuenkirchen-Vörden, Deutschland
            </p>
            <p className="text-fortis-muted text-sm mb-1">+49 (0) 5493 9139946</p>
            <a href="mailto:info@texfortis.de" className="text-fortis-blue text-sm hover:underline block mb-1">
              info@texfortis.de
            </a>
            <p className="text-fortis-muted text-sm">Mo-Fr: 8:00–17:00</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 mb-8" />

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-fortis-muted text-xs">©2026. Fortis Group. All Rights Reserved.</span>
          <span className="text-fortis-muted text-xs">Redesigned by <a href="https://abdulahaddf.vercel.app/" target="_blank" className="font-bold text-xl">AHAD</a> </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
