const BLIPS = [
  { x: 74.1, y: 15.6, delay: "0.58s" },
  { x: 91.4, y: 42.7, delay: "1.33s" },
  { x: 84.4, y: 74.1, delay: "2.08s" },
];

const TERM_LINES = [
  { cmd: "bluetoothctl scan on", out: "Discovery started", delay: "0s" },
  { cmd: "apktool d target.apk", out: "I: Using Apktool 2.9.3", delay: "3s" },
  { cmd: "adb shell dumpsys package", out: "3 permissions flagged", delay: "6s" },
];

const HeroVisual = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 overflow-hidden bg-gradient-to-b from-n-7 to-n-8"
  >
    {/* survey grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(53,224,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(53,224,200,0.04) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />

    {/* waterline */}
    <div className="absolute top-[12%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-color-1/50 to-transparent" />

    {/* sonar */}
    <div className="absolute left-[10%] -bottom-[30%] w-[24rem] h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem]">
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="hero-anim-sweep absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(53,224,200,0.28), rgba(53,224,200,0.05) 16deg, transparent 58deg)",
          }}
        />
      </div>
      <div className="absolute inset-[16%] rounded-full border border-white/8" />
      <div className="absolute inset-[34%] rounded-full border border-white/8" />
      <div className="absolute inset-[52%] rounded-full border border-white/8" />
      {BLIPS.map((blip, i) => (
        <span
          key={i}
          className="hero-anim-blip absolute w-2 h-2 rounded-full bg-color-1 shadow-[0_0_10px_2px_rgba(53,224,200,0.55)]"
          style={{
            left: `${blip.x}%`,
            top: `${blip.y}%`,
            animationDelay: blip.delay,
          }}
        />
      ))}
    </div>

    {/* terminal */}
    <div className="absolute right-[6%] top-[16%] hidden sm:block w-[17rem] md:w-[18rem] bg-n-9/70 backdrop-blur border border-white/8 rounded-xl p-4 font-code text-[11px] leading-relaxed">
      {TERM_LINES.map((line, i) => (
        <div
          key={i}
          className="hero-anim-term"
          style={{ animationDelay: line.delay }}
        >
          <div>
            <span className="text-color-1">$</span>{" "}
            <span className="text-n-2">{line.cmd}</span>
          </div>
          <div className="text-n-4">{line.out}</div>
        </div>
      ))}
    </div>

    {/* depth readout */}
    <div className="absolute right-[6%] bottom-[10%] hidden sm:block font-code text-[10px] tracking-[0.22em] uppercase text-n-4">
      Depth 24 m · echolocation
    </div>

    {/* scan line */}
    <div className="hero-anim-scanline absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-color-1/10 to-transparent" />
  </div>
);

export default HeroVisual;
