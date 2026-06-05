import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-7xl mx-auto px-6 w-full"
      >
        <p className="text-blue-400 mb-3">
          Skills
        </p>

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-6
        "
        >
          Technologies I Use
        </h2>

        <div className="w-24 h-1 bg-blue-500 rounded-full mb-10" />

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="
              glass
              rounded-2xl
              p-8
            "
            >
              <h3 className="text-2xl font-semibold mb-6">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                    bg-slate-800
                    px-4
                    py-2
                    rounded-full
                    text-sm
                  "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;