const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  accent,
  external,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 rounded-full transition-all duration-200 ${
    px || "px-7"
  } ${
    accent
      ? "bg-color-1 text-[#03140F] hover:bg-[#52E8D2] hover:shadow-[0_0_24px_rgba(53,224,200,0.35)]"
      : white
      ? "bg-n-1 text-n-8 hover:bg-white"
      : "border border-white/15 text-n-1 hover:border-white/40 hover:bg-white/5"
  } ${className || ""}`;

  const renderLink = () => (
    <a
      href={href}
      className={classes}
      target={external ? "_blank" : "_self"}
      rel={external && "noreferrer noopener"}
    >
      {children}
    </a>
  );

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
