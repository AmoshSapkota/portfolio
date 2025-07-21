import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-24">
        <div className="h-16 lg:h-20 w-full">
          {/* Navigation items with equal spacing across full width */}
          <div className="flex items-center justify-evenly h-full w-full max-w-none">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-blue-400 text-sm sm:text-base lg:text-lg whitespace-nowrap ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
