import { research, researchNote } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Roadmap = () => (
  <Section className="overflow-hidden" id="research">
    <div className="container">
      <Heading
        tag="Research"
        title="Open work, public by default"
        text="Techniques and tooling developed in client work are published openly so the community can review, reuse, and verify them."
      />

      <div className="max-w-[52rem] mx-auto space-y-3">
        {research.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex items-start gap-5 p-6 rounded-2xl border border-white/8 bg-white/[0.02] transition-all duration-300 hover:border-color-1/40 hover:bg-white/[0.04]"
          >
            <span className="mt-1.5 w-2 h-2 rounded-full bg-color-1 shadow-[0_0_8px_1px_rgba(53,224,200,0.5)]" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="font-code text-base text-n-1">
                  savagedamage/{item.repo}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full border border-color-1/30 bg-color-1/10 font-code text-[10px] uppercase tracking-wider text-color-1">
                  public
                </span>
              </div>
              <p className="body-2 mt-2 text-n-4">{item.text}</p>
            </div>
            <span className="mt-1 text-n-4 transition-all duration-300 group-hover:text-color-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        ))}
      </div>

      <p className="max-w-3xl mx-auto mt-10 text-sm text-n-4 border-l-2 border-color-2/60 pl-4">
        {researchNote}
      </p>
    </div>
  </Section>
);

export default Roadmap;
