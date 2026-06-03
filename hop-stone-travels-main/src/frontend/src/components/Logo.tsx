export default function Logo({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: {
      container: "h-8",
      text: "text-sm",
      sub: "text-[9px]",
    },
    md: {
      container: "h-10",
      text: "text-base",
      sub: "text-[10px]",
    },
    lg: {
      container: "h-14",
      text: "text-xl",
      sub: "text-xs",
    },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${s.container}`}>
      {/* Custom Logo Image */}
      <img
        src="/assets/images/hope-logo.jpg"
        alt="Hope Stone Tours & Travels"
        className="h-full aspect-square rounded-full object-cover flex-shrink-0 border-2 border-[#a8b560]"
      />

      {/* Company Name */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold text-primary-foreground tracking-wide ${s.text}`}
          style={{ color: "#f5f0e8" }}
        >
          Hope Stone
        </span>

        <span
          className={`font-body tracking-widest uppercase ${s.sub}`}
          style={{ color: "#a8b560" }}
        >
          Tours &amp; Travels
        </span>
      </div>
    </div>
  );
}