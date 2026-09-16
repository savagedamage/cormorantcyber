import Heading from "./Heading";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about">
      <div className="container">
        <Heading tag="About" title="An independent practitioner" />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-start">
          <div className="space-y-6 body-2 text-n-3">
            <p>
              <span className="font-medium text-n-1">Cormorant Cyber</span> is
              the solo consultancy of{" "}
              <span className="font-medium text-n-1">Casey Chambers</span>, an
              Android and mobile security specialist based in Dubai, UAE.
              Cormorants are coastal birds that dive deep to hunt — the name
              reflects a working style of going below the surface of an app or
              device to see what is actually there.
            </p>
            <p>
              The practice is built on real, reproducible technical capability:{" "}
              <span className="font-medium text-n-1">
                Android reverse engineering, APK disassembly, ADB and Shizuku
                privileged workflows, malware triage, penetration testing and
                blue teaming, Bluetooth HCI capture, HID and peripheral
                security research, and evidence-preserved digital
                investigations
              </span>{" "}
              — all documented openly in the public research corpus.
            </p>
            <p>
              Engagements are direct: one practitioner, no account-manager
              layer, clear scope, and findings you can act on. Work is
              available globally, with a base in the UAE timezone.
            </p>
          </div>

          <aside className="p-8 rounded-2xl border border-white/8 bg-white/[0.02] font-code text-sm">
            <h4 className="h6 mb-1">Casey Chambers</h4>
            <p className="text-color-1 text-xs mb-6">
              Founder &amp; Principal Consultant
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3">
              <dt className="text-color-1/70">Base</dt>
              <dd className="text-n-3">Dubai, United Arab Emirates</dd>
              <dt className="text-color-1/70">Focus</dt>
              <dd className="text-n-3">Android / mobile security</dd>
              <dt className="text-color-1/70">Working</dt>
              <dd className="text-n-3">Worldwide · remote-ready</dd>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Android RE",
                "Malware analysis",
                "Bluetooth HCI",
                "Digital forensics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-n-3 border border-white/10 rounded-full px-3 py-1 font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
};

export default About;
