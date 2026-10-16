import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../data";

function Experience() {
  return (
    <section id="experience" className="py-18">
      <div className="mx-auto max-w-5xl px-6">
        {/* ---------- Section heading (centered) ---------- */}
        <div className="text-center">
          <p className="section-label">Experience</p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            <span className="text-accent">Where I've</span>{" "}
            <span className="font-serif font-normal italic text-light">
              worked.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            A look at my professional journey and the teams I've helped along
            the way.
          </p>
        </div>

        {/* ---------- Timeline ---------- */}
        <div className="relative mt-20">
          {/* The vertical line (left on mobile, center on desktop) */}
          <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent/30 to-transparent md:left-1/2"></div>

          {experiences.map((job, index) => (
            <div key={job.role} className="relative mb-14 last:mb-0">
              {/* Round icon on the line */}
              <div className="absolute left-4 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-accent/40 bg-dark text-accent shadow-lg shadow-accent/30 md:left-1/2">
                <Briefcase size={18} />
              </div>

              {/* Card: even items go left, odd items go right (desktop) */}
              <div
                className={`card ml-12 transition hover:border-accent/30 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Period pill */}
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                  <Calendar size={14} />
                  {job.period}
                </span>

                {/* Role and company */}
                <h3 className="mt-4 text-2xl font-semibold">{job.role}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-3 text-muted">
                  <span className="font-medium text-accent">{job.company}</span>
                  <span className="flex items-center gap-1 text-sm">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </p>

                {/* What I did */}
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Technology tags */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;