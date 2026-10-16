import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="py-18"> 
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-12">
        {/* ---------- Section heading (centered) ---------- */}
        <div className="text-center">
          <p className="section-label">My Work</p>

          <h2 className="mt-4 text-2xl font-bold md:text-5xl lg:text-5xl">
            <span className="text-accent">Projects I've</span>{" "}
            <span className="font-serif font-normal italic text-light">
              built.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-1xl text-muted">
            Here are some projects that demonstrate my development skills and
            problem-solving abilities.
          </p>
        </div>

        {/* ---------- Project cards ---------- */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/5 bg-card transition hover:border-accent/30"
            >
              {/* Image area */}
              <div className="relative h-36 overflow-hidden lg:h-55">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Round arrow button in the bottom-right corner */}
                <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-dark/70 text-light backdrop-blur transition group-hover:bg-accent">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              {/* Text area */}
              <div className="p-4">
                <h3 className="text-2xl font-semibold transition group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag px-5 py-2 text-base">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ---------- Contact Me button at the bottom ---------- */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary gap-2">
            Contact Me
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;