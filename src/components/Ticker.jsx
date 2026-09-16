const tools = [
  "Frida",
  "Burp Suite",
  "Wireshark",
  "APKTool",
  "bluetoothctl",
  "Ghidra",
  "Kismet",
  "Metasploit",
  "nRF Connect",
  "Impacket",
  "adb",
  "Shizuku",
];

const Ticker = () => {
  return (
    <div className="relative z-1 mt-12 md:mt-16">
      <p className="text-center font-code text-[11px] uppercase tracking-[0.22em] text-n-4 mb-5">
        Tooling the work is built on
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="ticker flex w-max gap-12">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-code text-sm text-n-3 whitespace-nowrap"
            >
              <span className="text-color-1/60">▹</span>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
