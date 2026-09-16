import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { links } from "../config";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="process">
      <div className="container relative z-2">
        <Heading
          tag="How engagements work"
          title="Clear scope, evidence-backed results"
          text="Every engagement runs on the same discipline: written rules of engagement, documented methodology, and findings you can act on."
        />

        <div className="relative">
          <PricingList />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="font-code text-xs uppercase tracking-wider text-color-1 border-b border-color-1/40 pb-0.5 transition-colors hover:border-color-1"
            href={links.email}
          >
            Scope your engagement
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
