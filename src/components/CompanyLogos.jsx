import { heroStrip } from "../constants";
import { links } from "../config";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Focus areas · open research at {links.github}
      </h5>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {heroStrip.map((item, i) => (
          <li
            key={i}
            className="flex items-center font-code text-sm text-n-3"
          >
            <span className="mr-2 text-color-1">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
