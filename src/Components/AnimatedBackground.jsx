import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const outerOrbitRef = useRef(null);
  const innerOrbitRef = useRef(null);
  const titleWrapRef = useRef(null);
  const topTextRef = useRef(null);
  const mainTextRef = useRef(null);
  const midTextRef = useRef(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orbit animations
      gsap.to(outerOrbitRef.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(innerOrbitRef.current, {
        rotation: -180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title intro animation
      gsap.from([topTextRef.current, mainTextRef.current], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- HOVER (DESKTOP ONLY) ---------------- */
  const onEnter = () => {
    if (isTouchDevice) return;

    gsap.to(mainTextRef.current, {
      x: 20,
      letterSpacing: "0.25em",
      textShadow: "0 0 30px rgba(255,255,255,0.35)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    if (isTouchDevice) return;

    gsap.to(mainTextRef.current, {
      x: 0,
      letterSpacing: "0.15em",
      textShadow: "none",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-black overflow-hidden "
    >
      {/* RESPONSIVE TITLE */}
      <div
        ref={titleWrapRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="
          absolute
          top-24
          left-1/2 -translate-x-1/2
          md:left-16 md:translate-x-0
          text-center md:text-left
          select-none 
        "
      >
        <div
          ref={topTextRef}
          className="
            font-extrabold uppercase
            text-[48px] sm:text-[72px] md:text-[100px]
            tracking-[0.15em]
            bg-linear-to-b from-gray-200 to-gray-500
            bg-clip-text text-transparent
            whitespace-nowrap
          "
        >
          APPTWARE
        </div>

        <div
          ref={midTextRef}
          className="
            text-gray-500
            text-2xl sm:text-3xl md:text-5xl
            font-extrabold tracking-widest
            mt-5 mb-2 md:mb-4
          "
        >
          EMPLOYEE
        </div>

        <div
          ref={mainTextRef}
          className="
            font-extrabold uppercase
            text-[48px] sm:text-[72px] md:text-[110px]
            tracking-[0.15em]
            bg-linear-to-b from-gray-200 to-gray-500
            bg-clip-text text-transparent
            whitespace-nowrap
          "
        >
          DATA
        </div>
      </div>

      {/*  OUTER ORBIT (RESPONSIVE SIZE) */}
      <div
        ref={outerOrbitRef}
        className="
          absolute inset-0 m-auto
          w-65 h-65
          sm:w-85 sm:h-85
          md:w-105 md:h-105
          border-2 border-dashed border-gray-600 rounded-full
        "
      >
        {[0, 120, 240].map((angle, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="translate-x-32.5 sm:translate-x-42.5 md:translate-x-52.5">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-sky-400 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  INNER ORBIT */}
      <div
        ref={innerOrbitRef}
        className="
          absolute inset-0 m-auto
          w-45 h-45
          sm:w-55 sm:h-55
          md:w-70 md:h-70
          border-2 border-gray-700 rounded-full
        "
      >
        {[60, 240].map((angle, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="translate-x-22.5 sm:translate-x-27.5 md:translate-x-35">
              <span className="block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-sky-300 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/*  CENTER LOGO */}
      <div
        className="
          absolute inset-0 m-auto
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
          rounded-full bg-sky-400
          flex items-center justify-center shadow-lg
        "
      >
        <img
          src="/src/logo/apptware_logo.svg"
          alt="logo"
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
        />
      </div>
    </div>
  );
}
