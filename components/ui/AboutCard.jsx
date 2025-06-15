import CardCorners from "./CardCorners";

function AboutCard({ children, className }) {
    return (
    <div
      className={`absolute w-[85%] h-[480px] md:w-[350px] md:h-[500px] flex flex-col items-start justify-start p-4 bg-black/[90%] border border-white/[25%] ${className}`}
    >
      <CardCorners />

      {children}
    </div>
  );
}

export default AboutCard;
