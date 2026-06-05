import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
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
          About Me
        </p>

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-6
        "
        >
          Who I Am
        </h2>

        <div className="w-24 h-1 bg-blue-500 rounded-full mb-10" />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Education
            </h3>

            <p className="text-slate-400">
               Building a strong foundation in computer science, software engineering principles, and modern development practices. Through academic learning and hands-on projects, I continuously strengthen my problem-solving skills and technical expertise.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Development
            </h3>

            <p className="text-slate-400">
               Experienced in developing full-stack web applications using React, Node.js, Express, and MongoDB. I enjoy creating responsive user interfaces, designing scalable backend systems, and integrating APIs to deliver seamless user experiences.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Goal
            </h3>

            <p className="text-slate-400">
              To contribute to impactful software projects while continuously growing as a developer. I aim to build innovative, user-focused applications, collaborate with talented teams, and develop solutions that create real-world value.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;