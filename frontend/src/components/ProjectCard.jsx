import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ project }) {
  return (
    <div
      className="
      glass
      rounded-2xl
      overflow-hidden
      hover:-translate-y-3
      hover:shadow-[0_0_40px_rgba(59,130,246,.2)]
      transition-all
      duration-300
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
        w-full
        h-52
        object-cover
        "
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              bg-slate-800
              px-3
              py-1
              rounded-full
              text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-slate-800
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            bg-blue-500
            "
          >
            <HiOutlineExternalLink />
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;