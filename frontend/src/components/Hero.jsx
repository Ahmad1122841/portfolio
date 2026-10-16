import heroBg from "../assets/images/hero-bg.jpg";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center pb-24 pt-36"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark layer on top of the background image so text is readable */}
      <div className="absolute inset-0 bg-dark/80"></div>

      {/* Main content */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        {/* ---------- LEFT SIDE: text ---------- */}
        <div>
          {/* Small pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-card px-4 py-2 text-sm text-accent">
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            Software Engineer • Full Stack Developer
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight lg:text-5xl">
            Building <span className="text-accent">enterprise</span> web
            {" "}
            <span className="font-serif font-medium italic">applications.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Hi, I'm Ahmad Gul — a software engineer specializing in React,
            Next.js, and Node.js. I build scalable, performant web
            applications that users love.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary gap-2">
              Contact Me
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a href="/resume.pdf" download className="btn-outline">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download CV
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Interested in working together? Let's build something great.
          </p>
        </div>

        {/* ---------- RIGHT SIDE: profile image ---------- */}
        <div className="relative mx-auto w-full max-w-md lg:mr-0">
          <div className="overflow-hidden rounded-3xl border border-accent/20 bg-card p-2 shadow-2xl shadow-accent/20">
            <img
              src={profile}
              alt="My profile"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          {/* "Available for work" badge */}
          <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-xl border border-white/5 bg-card px-4 py-3 text-sm shadow-lg md:-right-6">
            {/* <span className="relative flex h-3 w-3">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
            </span> */}
            Available for work
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;