import { services } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
        <Heading
          tag="Capabilities"
          title="Services"
          text="Focused, hands-on engagements covering the mobile attack surface — from the app layer down to the radio."
        />

        <div className="relative z-1 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`group relative flex flex-col p-7 rounded-2xl border border-white/8 bg-white/[0.02] transition-all duration-300 hover:border-color-1/40 hover:bg-white/[0.04] hover:-translate-y-0.5 ${
                i === 0 ? "xl:col-span-2" : ""
              }`}
            >
              {i === 0 && (
                <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 bg-color-1/10 blur-[80px] rounded-full" />
              )}

              <div className="relative flex items-center justify-center w-11 h-11 mb-6 border border-color-1/30 bg-color-1/10 rounded-lg text-xl text-color-1">
                {service.icon}
              </div>

              <h4 className="relative h6 mb-3">{service.title}</h4>
              <p className="relative body-2 mb-6 text-n-3">{service.text}</p>

              <ul className="relative mt-auto">
                {service.bullets.map((bullet, j) => (
                  <li
                    key={`${service.id}-${j}`}
                    className="flex items-start py-2.5 border-t border-white/5 body-2 text-n-4"
                  >
                    <span className="mr-3 text-color-1">›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
