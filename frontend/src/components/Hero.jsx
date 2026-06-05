import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-16
        items-center
      "
      >
        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-blue-400 mb-2">
            Hello, I'm
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
          "
          >
            Khit Thiri
          </h1>

          <div
            className="
            text-2xl
            md:text-3xl
            text-slate-400
            mt-4
            h-12
          "
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p
            className="
            mt-8
            text-slate-400
            max-w-xl
            leading-8
          "
          >
            I build responsive, modern and scalable
            web applications using React, Node.js,
            Express and MongoDB.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#projects"
              className="
              px-8
              py-4
              rounded-xl
              bg-blue-500
              hover:bg-blue-600
              hover:scale-105
              transition
              duration-300
            "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              px-8
              py-4
              rounded-xl
              border
              border-slate-600
              hover:border-blue-500
              hover:scale-105
              transition
              duration-300
            "
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex justify-center"
        >
          <div
            className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            overflow-hidden
            border-4
            border-blue-500
            shadow-[0_0_80px_rgba(59,130,246,.4)]
          "
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="
              w-full
              h-full
              object-cover
            "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;