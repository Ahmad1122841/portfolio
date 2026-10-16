import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { contactInfo } from "../data";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-18">
      <div className="mx-auto max-w-6xl px-6">
        {/* ---------- Section heading (centered) ---------- */}
        <div className="text-center">
          <p className="section-label">Get In Touch</p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            <span className="text-accent">Let's build</span>{" "}
            <span className="font-serif font-normal italic text-light">
              something great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        {/* ---------- Two columns ---------- */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* LEFT: the form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-accent/20 bg-card p-8 md:p-12"
          >
            <div>
              <label htmlFor="name" className="mb-3 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name..."
                className="input"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="mb-3 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="input"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-3 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="input resize-none"
              ></textarea>
            </div>

            <button
  type="submit"
  disabled={status === "sending"}
  className="btn-primary mt-8 w-full gap-3 py-4 text-lg disabled:opacity-60"
>
  {status === "sending" ? "Sending..." : "Send Message"}
  <Send size={20} />
</button>

{status === "success" && (
  <p className="mt-4 text-center text-accent">Thanks! Your message has been sent.</p>
)}
{status === "error" && (
  <p className="mt-4 text-center text-red-400">Something went wrong. Please try again.</p>
)}
          </form>

          {/* RIGHT: two cards stacked */}
          <div className="flex flex-col gap-8">
            {/* Contact information card */}
            <div className="rounded-3xl border border-white/5 bg-card p-8 md:p-10">
              <h3 className="text-2xl font-semibold">Contact Information</h3>

              <div className="mt-8 space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    {/* Icon box */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted">{item.label}</p>
                      <p className="text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently available card */}
            <div className="rounded-3xl border border-accent/20 bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <h3 className="text-lg">Currently Available</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance
                consultant, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;