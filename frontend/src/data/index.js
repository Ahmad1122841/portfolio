import { Code, Rocket, Users, Lightbulb, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import project1 from "../assets/images/project-1.jpeg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import avatar1 from "../assets/images/Avatar-1.jpg";
import avatar2 from "../assets/images/Avatar-2.jpg";
import avatar3 from "../assets/images/Avatar-3.jpg";
import avatar4 from "../assets/images/Avatar-4.jpg";

// Cards shown on the right side of the About section
export const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    text: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    text: "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Staying ahead with the latest technologies and best practices.",
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "An e-commerce application with product management, shopping cart, and payment integration.",
    image: project1,
    tags: ["React", "javascript", "Node.js"],
    link: "https://ai-ecommerce-frontend-ten.vercel.app/", // replace with your live demo or GitHub link
  },
  {
    title: "Restuarent Managment System",
    description:
      "An restuarent managment application where you can order different food add to cart and payment.",
    image: project2,
    tags: ["React", "Spring Boot", "MySQL"],
    link: "https://github.com/Ahmad1122841/Foodies-Application.git",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing assistant that helps users draft, edit, and improve their content.",
    image: project3,
    tags: ["Next.js", "OpenAI", "Tailwind"],
    link: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A task management application for organizing projects, tracking progress, and collaborating with teams.",
    image: project4,
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

// Jobs shown in the Experience section (newest first)
export const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Company",
    location: "Remote",
    period: "2023 - Present",
    points: [
      "Led the development of a React dashboard used by 50,000+ users.",
      "Improved page load speed by 40% with code splitting and caching.",
      "Mentored junior developers and ran weekly code reviews.",
    ],
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    location: "Peshawar, Pakistan",
    period: "2021 - 2023",
    points: [
      "Built and shipped 10+ client websites and web applications.",
      "Designed REST APIs with Node.js and connected them to React apps.",
      "Worked directly with designers to turn Figma files into pixel-perfect UI.",
    ],
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    role: "Junior Web Developer",
    company: "Startup Studio",
    location: "Remote",
    period: "2020 - 2021",
    points: [
      "Developed responsive landing pages using HTML, CSS and JavaScript.",
      "Fixed bugs and added new features to the company's main product.",
    ],
    tags: ["JavaScript", "Tailwind", "Git"],
  },
];

// Testimonials shown in the Testimonials section
export const testimonials = [
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    name: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    image: avatar1,
  },
  {
    quote:
      "He turned our complex design into a fast, beautiful application. Communication was clear and every deadline was met.",
    name: "Sarah Johnson",
    role: "CEO, Creative Studio",
    image: avatar2,
  },
  {
    quote:
      "One of the most reliable developers I have worked with. He solves problems quickly and always thinks about the user.",
    name: "David Chen",
    role: "CTO, Tech Startup",
    image: avatar3,
  },
  {
    quote:
      "Our website speed and user experience improved a lot after his work. I would happily hire him again.",
    name: "Emily Carter",
    role: "Marketing Lead, Growth Co.",
    image: avatar4,
  },
];

// Contact details shown in the Contact section
export const contactInfo = [
  { icon: Mail, label: "Email", value: "ahmadkhan20033@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 3362555980" },
  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
];

// Social links shown in the Footer
export const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Ahmad1122841" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-gul-2467322a2?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/your-username" },
];