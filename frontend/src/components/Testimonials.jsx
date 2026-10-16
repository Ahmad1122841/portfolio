import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data";

function Testimonials() {
  // Which testimonial is currently shown (0 = first)
  const [current, setCurrent] = useState(0);

  // Go to next. After the last one, go back to the first.
  const next = () => setCurrent((current + 1) % testimonials.length);

  // Go to previous. Before the first one, go to the last.
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  // The testimonial we are showing right now
  const item = testimonials[current];

  return (
    <section id="testimonials" className="py-18">
      <div className="mx-auto max-w-5xl px-6">
        {/* ---------- Section heading (centered) ---------- */}
        <div className="text-center">
          <p className="section-label">What People Say</p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            <span className="text-accent">Kind words from</span>{" "}
            <span className="font-serif font-normal italic text-light">
              amazing people.
            </span>
          </h2>
        </div>

        {/* ---------- Testimonial card ---------- */}
        <div className="relative mt-20 rounded-3xl border border-accent/10 bg-card p-8 shadow-xl shadow-accent/10 md:p-12">
          {/* Teal quote icon, sticking out of the top-left corner */}
          <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white md:left-12">
            <Quote size={24} />
          </div>

          {/* The quote text. "key" restarts the fade animation on change */}
          <div key={current} className="fade-in">
            <p className="mt-4 text-xl leading-relaxed md:text-2xl md:leading-relaxed">
              "{item.quote}"
            </p>

            {/* Person info */}
            <div className="mt-10 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-full border-2 border-accent/40 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-muted">{item.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Controls: arrow, dots, arrow ---------- */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {/* Previous button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-card text-light transition hover:border-accent hover:text-accent"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots: the active one becomes a long teal bar */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-12 bg-accent" : "w-2 bg-white/20"
                }`}
              ></button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-card text-light transition hover:border-accent hover:text-accent"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;