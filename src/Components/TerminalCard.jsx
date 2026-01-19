import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const content = [
  "APPTWARE EMPLOYEE/CRUD",
  "",
  "Start Application        /home",
  "Create Employee          /create",
  "Edit Employee            /edit/:id",
  "Search & Filter          /home",

  "",
  "● src/pages/home.jsx",

  "",
  "initializing GSAP animations...",
  "synthesizing UI effects (scroll + hover)",
  "",
  "here are the main components and how they interact:",
  "",
  "Main Components Overview",
  "- React.js single-page application",
  "- Employee CRUD using local state",
  "- React Router DOM for navigation",
  "- GSAP + ScrollTrigger animations",
  "- Tailwind CSS for responsive UI",
  "",
  "Key Features",
  "- Create, edit, delete employees",
  "- Search and age-based filtering",
  "- Animated table rows on scroll",
  "- Interactive landing page terminal",
];

export default function TerminalCard() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    content.forEach((line) => {
      tl.to(textRef.current, {
        textContent: (i, el) => el.textContent + line + "\n",
        duration: line.length * 0.02,
        ease: "none",
      });
    });

    // auto scroll upward
    tl.to(containerRef.current, {
      scrollTop: containerRef.current.scrollHeight,
      duration: 3,
      ease: "none",
    });

    // reset
    tl.set(textRef.current, { textContent: "" });
    tl.set(containerRef.current, { scrollTop: 0 });
  }, []);

  return (
    <div className="w-full max-w-lg bg-black rounded-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
      {/* Header */}
      <div className="flex gap-2 px-4 py-2 bg-zinc-900 rounded-t-xl">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="h-80 p-4 text-sm font-mono text-cyan-300 overflow-hidden whitespace-pre-wrap"
      >
        <pre ref={textRef} />
      </div>

      {/* Button */}
      <div className="p-4 border-t border-cyan-400/20">
        <button
          onClick={() => navigate("/home")}
          className="w-full py-2 rounded-lg bg-cyan-400 text-black font-bold
                     hover:bg-cyan-300 transition cursor-pointer"
        >
          Starts with Employee Data..
        </button>
      </div>
    </div>
  );
}
