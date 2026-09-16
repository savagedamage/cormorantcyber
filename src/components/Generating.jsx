import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-12 px-5 bg-n-9/70 backdrop-blur border border-white/10 rounded-full ${
        className || ""
      } text-sm`}
    >
      <img
        src={loading}
        alt=""
        className="w-4 h-4 mr-3 animate-spin pointer-events-none select-none"
      />
      <span className="font-code text-[11px] uppercase tracking-wider text-n-2">
        Evidence-preserved by default
      </span>
    </div>
  );
};

export default Generating;
