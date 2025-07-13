import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MissionCard from "./MissionCard";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Typing Text Component - Memoized for better performance
const TypingText = React.memo(({ lines, className }) => {
  const [displayedText, setDisplayedText] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className={`${className} min-h-[4rem] sm:min-h-[6rem]`}>
      {lines.map((_, i) => (
        <h1
          key={i}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        >
          {displayedText[i]}
          {i === lineIndex && <span className="animate-pulse">|</span>}
        </h1>
      ))}
    </div>
  );
});

TypingText.displayName = "TypingText";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const missionLines = [
    "We’re On A Mission",
    "To Build Feminist Power",
    "From the Margins",
  ];

  return (
    <section className="relative z-20 flex-grow w-full min-h-[90vh] bg-[url('/home/herobg.jpg')] bg-cover bg-center bg-fixed">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-sm z-10"></div>

      {/* Animated background elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
      </motion.div>

      <div className="relative z-20 w-full lg:h-[90vh] flex flex-col items-center justify-end">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 gap-8 lg:gap-0">
          {/* Hero Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            <motion.div variants={fadeInUp} className="text-white space-y-4">
              <TypingText
                lines={missionLines}
                className="space-y-2 font-serif"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 max-w-xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 font-serif leading-relaxed">
                We are a grassroots movement led by women. No donors. No
                gatekeepers. Just solidarity, healing, and justice. Together, we
                are reclaiming dignity and power in the face of violence,
                casteism, and silence
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <Link
                to="/projects"
                className="group relative px-8 py-3 bg-accent text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:text-accent"
              >
                <span className="relative z-10">Our Work</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              <Link
                to="/about"
                className="group relative px-8 py-3 border-2 border-white text-white hover:text-accent font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={1}
            variants={fadeInUp}
            className="w-full lg:w-auto max-w-md mt-8 lg:mt-0 transform hover:scale-105 transition-transform duration-300"
          >
            <MissionCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
