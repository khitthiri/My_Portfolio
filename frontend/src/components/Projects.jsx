import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
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
          Projects
        </p>

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-6
        "
        >
          Featured Work
        </h2>

        <div className="w-24 h-1 bg-blue-500 rounded-full mb-10" />

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;