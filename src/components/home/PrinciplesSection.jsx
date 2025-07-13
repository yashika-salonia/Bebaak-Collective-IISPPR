import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Handshake,
  BadgeDollarSign,
} from "lucide-react"; // Import lucide icons

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

const TestimonialsSection = () => {
  const testimonials = [
    {
      heading: "Feminism from Below",
      text: "We center the voices and experiences of those historically silenced: Dalit, Muslim, Adivasi, queer, working-class, and displaced women. Theory begins there.",
      icon: Users,
    },
    {
      text: "We do not ask for permission to speak, gather, resist, or care. We are answerable only to the communities we serve.",
      heading: "Autonomy over Approval",
      icon: ShieldCheck,
    },
    {
      text: "We treat emotional support, healing spaces, and sisterhood not as side work but as political acts of resistance.",
      heading: "Care as Resistance",
      icon: HeartHandshake,
    },
    {
      text: "We do not believe in gatekeeping theory. We translate feminist ideas into everyday language, practice, and lived meaning.",
      heading: "Knowledge Must Be Shared, Not Hoarded",
      icon: BookOpen,
    },
    {
      text: "We do not help. We stand with. We do not uplift. We walk beside. This is not welfare. It is justice.",
      heading: "Solidarity over Charity",
      icon: Handshake,
    },
    {
      text: "We are a non-funded initiative. Our independence is our strength. No strings. No scripts.",
      heading: "No Funding, No Compromise",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <section className="relative bg-primary py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Our <br />
            <span className="text-accent"> — Principles —</span>
          </h2>
          <p className="text-white/80 text-sm font-serif sm:text-base max-w-2xl mx-auto">
            At Nari Parcham, our work is not guided by trends, funding cycles,
            or performative allyship. It is guided by principles born from
            struggle, care, and collective truth-telling
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={1}
          className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-3 gap-4 md:gap-7"
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={2}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

const Card = ({ text, heading, icon: Icon, index }) => (
  <motion.div
    variants={fadeInUp}
    custom={index * 0.1}
    className="bg-white/10 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-sm h-full flex flex-col"
  >
    <div className="flex flex-col items-center justify-start text-center h-full p-3">
      <Icon className="text-accent mb-2" size={36} />
      <p className="text-white text-xl sm:text-xl font-bold font-serif mb-2">{heading}</p>
      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
        "{text}"
      </p>
    </div>
  </motion.div>
);

export default TestimonialsSection;