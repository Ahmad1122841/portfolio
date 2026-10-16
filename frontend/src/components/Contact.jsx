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
  <section id="contact" className="py-12">
    <div className="mx-auto max-w-6xl px-6">
      {/* ---------- Section heading (centered) ---------- */}
      <div className="text-center">
        <p className="section-label">Get In Touch</p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          <span className="text-accent">Let's build</span>{" "}
          <span className="font-serif font-normal italic text-light">
            something great.
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base text-muted">
          Have a project in mind? I'd love to hear about it. Send me a message
          and let's discuss how we can work together.
        </p>
      </div>

      {/* ---------- Two columns ---------- */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* LEFT: the form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-accent/20 bg-card p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
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
              className="input !py-2.5"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
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
              className="input !py-2.5"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="input resize-none !py-2.5"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-5 w-full gap-2 py-3 text-base disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>

          {status === "success" && (
            <p className="mt-3 text-center text-sm text-accent">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-center text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* RIGHT: two cards stacked */}
        <div className="flex flex-col gap-6">
          {/* Contact information card */}
          <div className="rounded-2xl border border-white/5 bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <div className="mt-5 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  {/* Icon box */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently available card */}
          <div className="rounded-2xl border border-accent/20 bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <h3 className="text-base">Currently Available</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
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