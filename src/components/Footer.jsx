import { socials } from "../constants";
import { links, site } from "../config";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";

const Footer = () => {
  return (
    <>
      <Section crosses id="contact">
        <div className="container">
          <div className="relative max-w-[44rem] mx-auto rounded-3xl glass p-10 md:p-16 text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[18rem] bg-color-1/15 blur-[100px] rounded-full" />

            <Heading
              className="relative"
              tag="Contact"
              title="Let's talk about your mobile attack surface"
              text="Whether it's an app you're shipping, a sample you need triaged, or a device you want examined — the first conversation is free and confidential."
            />

            <div className="relative flex flex-wrap justify-center gap-4 mb-8">
              <Button href={links.email} accent>
                casey@cormorantcyber.com
              </Button>
              <Button href={links.whatsapp} external>
                WhatsApp us
              </Button>
            </div>

            <p className="relative caption text-n-4">
              {site.base} · {site.hours} · Responses within one business day
            </p>
          </div>
        </div>
      </Section>

      <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block">
            © <span className="text-color-1 font-medium">{site.name}</span> ·{" "}
            {site.owner} · {site.base} · {new Date().getFullYear()}
          </p>

          <ul className="flex gap-3 flex-wrap">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.id}
                target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                rel={
                  social.url.startsWith("mailto")
                    ? undefined
                    : "noreferrer noopener"
                }
                className="flex items-center justify-center px-4 h-9 rounded-full border border-white/8 bg-white/[0.02] font-code text-[11px] uppercase tracking-wider text-n-3 transition-colors hover:text-color-1 hover:border-color-1/40"
              >
                {social.title}
              </a>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Footer;
