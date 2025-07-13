import React from "react";
import { motion } from "framer-motion";

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

const WorkTogether = () => {
  return (
    <section className="relative bg-white w-full overflow-hidden">
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
        {/* headline */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-accent mb-2">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            Together We Rise <br />
            from the Margins
          </h3>
          <p className="max-w-2xl mx-auto font-serif text-gray-600">
            We are a grassroots feminist movement led by Dalit, Muslim, Adivasi
            and working-class women. No donors. No gatekeepers. Just justice.
          </p>
        </div>

        {/* ─────────  JOIN US CARDS  ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Volunteers */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
          >
            <img
              src="/gallery/im14.jpg"
              alt="Volunteers working together"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-primary mb-3">
                Volunteers
              </h4>
              <p className="text-gray-600 mb-4 grow">
                Lawyers, social workers, teachers & community organizers help
                run legal literacy circles, healing spaces and skill workshops.
                Come with humility expect to learn as much as you teach.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Sign up →
              </a>
            </div>
          </motion.div>

          {/* Learners */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
          >
            <img
              src="/gallery_carousel/gi7.webp"
              alt="Learners in a study circle"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-primary mb-3">
                Learners
              </h4>
              <p className="text-gray-600 mb-4 grow">
                Students, researchers and policy enthusiasts are welcome. This
                isn’t a classroom it’s a community. Unlearn syllabus-safe ideas
                and sit with stories that unsettle and expand you.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Join a circle →
              </a>
            </div>
          </motion.div>

          {/* Collaborators */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
          >
            <img
              src="/home/about1.webp" /** pick any third image you have */
              alt="Collaborators creating together"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-primary mb-3">
                Collaborators
              </h4>
              <p className="text-gray-600 mb-4 grow">
                Artists, media makers and educators co-host workshops, build
                traveling libraries or amplify women’s voices across caste,
                class and geography.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Partner with us →
              </a>
            </div>
          </motion.div>
        </div>

        {/* call-to-action button */}
        <div className="mt-16 text-center">
          <a
            href="https://forms.gle/QVgxw657fzfKUW9WA"
            className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-accent-dark transition-colors"
          >
            Join Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
