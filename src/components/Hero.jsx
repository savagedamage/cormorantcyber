import Typewriter from "typewriter-effect";

import { typewriterStrings } from "../constants";
import Button from "./Button";
import HeroVisual from "./HeroVisual";
import { BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Section from "./Section";
import Ticker from "./Ticker";

const Hero = () => {
  return (
    <Section
      className="pt-[7rem] -mt-16"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        {/* glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[64rem] max-w-full h-[28rem] bg-color-1/10 blur-[120px] rounded-full" />
        <div className="pointer-events-none absolute top-40 left-[8%] w-[22rem] h-[22rem] bg-color-2/10 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute top-64 right-[5%] w-[18rem] h-[18rem] bg-[#3D7BFF]/10 blur-[90px] rounded-full" />

        <div className="relative z-1 max-w-[64rem] mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.03] font-code text-[11px] uppercase tracking-[0.18em] text-n-3">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-color-1" />
            Independent security consultancy · Dubai, UAE
          </div>

          <h1 className="h1 mb-6 neon-cyan">
            Security consulting for teams
            <br className="hidden md:block" /> that ship software —{" "}
            <span className="text-gradient">
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-8 text-n-3 lg:mb-10">
            Cormorant Cyber helps product teams find, understand, and fix
            security issues across mobile, wireless, and peripheral attack
            surfaces — hands-on reversing, malware triage, penetration testing,
            and blue-team hardening.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button href="#contact" accent>
              Start a conversation
            </Button>
            <Button href="#research">View public research</Button>
          </div>
        </div>

        {/* app window */}
        <div className="relative z-1 max-w-[60rem] mx-auto">
          <div className="animate-border-gradient rounded-2xl p-px bg-white/10">
            <div className="relative rounded-[calc(1rem-1px)] bg-n-7 overflow-hidden">
              <div className="flex items-center gap-2 px-4 h-9 border-b border-white/5 bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/50" />
                <span className="mx-auto font-code text-[11px] text-n-4">
                  cormorantcyber.com — live sonar scan
                </span>
                <span className="font-code text-[11px] text-n-4">uae</span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
                <HeroVisual />
                <Generating className="absolute left-4 bottom-4 hidden md:flex" />
              </div>
            </div>
          </div>
        </div>

        <Ticker />

        <Gradient />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
