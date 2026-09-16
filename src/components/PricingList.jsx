import { process } from "../constants";
import Button from "./Button";
import { links } from "../config";

const PricingList = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3 max-lg:max-w-[28rem] max-lg:mx-auto">
      {process.map((plan, i) =>
        plan.premium ? (
          <div
            key={plan.id}
            className="relative p-px rounded-[1.75rem] bg-conic-gradient"
          >
            <div className="relative flex flex-col h-full p-8 bg-n-7 rounded-[calc(1.75rem-1px)]">
              <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-56 h-24 bg-color-1/15 blur-[60px] rounded-full" />
              <div className="flex items-center justify-between mb-4">
                <h4 className="h6">{plan.title}</h4>
                <span className="px-2.5 py-0.5 rounded-full border border-color-1/30 bg-color-1/10 font-code text-[10px] uppercase tracking-wider text-color-1">
                  Most requested
                </span>
              </div>
              <p className="body-2 mb-6 text-n-3">{plan.description}</p>
              <Button className="w-full mb-6" href={links.email} accent>
                Start a conversation
              </Button>
              <ul className="mt-auto">
                {plan.features.map((feature, j) => (
                  <li
                    key={`plan-${i}-feature-${j}`}
                    className="flex items-start py-4 border-t border-white/5"
                  >
                    <span className="mr-3 text-color-1">›</span>
                    <p className="body-2">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div
            key={plan.id}
            className="relative flex flex-col p-8 rounded-[1.75rem] border border-white/8 bg-white/[0.02] transition-colors hover:border-white/15"
          >
            <h4 className="h6 mb-4">{plan.title}</h4>
            <p className="body-2 mb-6 text-n-3">{plan.description}</p>
            <Button className="w-full mb-6" href={links.email}>
              Start a conversation
            </Button>
            <ul className="mt-auto">
              {plan.features.map((feature, j) => (
                <li
                  key={`plan-${i}-feature-${j}`}
                  className="flex items-start py-4 border-t border-white/5"
                >
                  <span className="mr-3 text-color-1">›</span>
                  <p className="body-2">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default PricingList;
