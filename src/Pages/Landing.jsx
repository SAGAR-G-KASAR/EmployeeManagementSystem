import AnimatedBackground from "../Components/AnimatedBackground";
import TerminalCard from "../Components/TerminalCard";

export default function Landing() {
  return (
    <section className="min-h-screen flex items-center  px-6">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center"></div>

        {/* RIGHT TERMINAL CARD */}
        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
