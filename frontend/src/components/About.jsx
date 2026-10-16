import { highlights } from "../data";

function About() {
  return (
    <section id="about" className="py-18">  
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* ---------- LEFT SIDE: text ---------- */}
        <div>
          <p className="section-label">About Me</p>

          <h2 className="mt-6 text-4xl font-bold leading-snug md:text-5xl lg:text-5xl">
            <span className="text-accent">Building the future,</span>
            <span className="block font-serif font-normal italic text-light">
              one component at a time.
            </span>
          </h2>

          {/* CHANGED: text-lg to text-xl, leading-relaxed to leading-8 */}
          <div className="mt-10 space-y-5 text-1xl leading-8 text-muted">
            <p>
              I'm a passionate software engineer with over 1 years of
              experience crafting digital products that make a difference. My
              journey started with a curiosity for how things work on the web,
              and it has evolved into a deep expertise in modern frontend
              technologies.
            </p>
            <p>
              I specialize in React, Next.js, and node.js, building
              everything from sleek landing pages to complex enterprise
              applications. My approach combines technical excellence with a
              keen eye for design and user experience.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Quote box message */}
          <blockquote className="mt-10 rounded-3xl border border-accent/10 bg-card p-8 text-xl italic leading-relaxed shadow-lg shadow-accent/10">
            "My mission is to create digital experiences that are not just
            functional, but truly delightful — products that users love to use
            and developers love to maintain."
          </blockquote>
        </div>

        {/* ---------- RIGHT SIDE: 4 highlight cards ---------- */}
        <div className="grid h-fit gap-8 sm:grid-cols-2 lg:mt-40">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              {/* Icon box */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;