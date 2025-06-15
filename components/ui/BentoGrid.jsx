import { montserrat_alternates, poppins } from "@/lib/fonts";
import CardCorners from "./CardCorners";
import { InteractiveGradientBg } from "@/components/ui/InteractiveGradientBg";
import { FancyButtonAlt } from "./FancyButton";
import { FaRegCopy } from "react-icons/fa6";
import { socials } from "@/lib/utils";
import { PiFilePdfFill } from "react-icons/pi";
import { RiChatSmile3Line } from "react-icons/ri";
import Link from "next/link";
import { memo, useMemo } from "react";
import {
  DynamicGame,
  DynamicInteractiveGradientBg,
} from "@/lib/dynamic-imports";

const techStack = {
  primary: ["Solid", "React", "Next", "Node", "Express", "MongoDB"],
  secondary: [
    "Postgres",
    "MySQL",
    "Firebase",
    "AWS",
    "Google Cloud",
    "Blender",
  ],
};

const BentoGrid = memo(function BentoGrid() {
  const renderTechStack = useMemo(
    () => ({
      primary: techStack.primary.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm">
          {item}
        </div>
      )),
      secondary: techStack.secondary.map((item) => (
        <div key={item} className="bg-black rounded-lg p-4 py-2 text-sm">
          {item}
        </div>
      )),
    }),
    []
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-2 xl:grid-rows-3 w-full flex-1 gap-4">
      <div className="relative flex flex-col items-center p-4 min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md col-span-2">
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Address
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold">Ghana ~ Accra</h1>
          <span className="text-gray-400">Satellite</span>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/assets/illustration-alt.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        className={`flex flex-col items-center p-4 relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md col-span-2`}
      >
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Education
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className={`text-2xl font-bold text-center`}>
            BSc. Computer Science
          </h1>
          <span className="text-center text-gray-400">
            Ghana Communication Technology University
          </span>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/assets/address-illustration.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start p-4 relative min-h-[250px] border bg-black/[20%] border-white/[25%] col-span-2 gap-8">
        <CardCorners />
        <DynamicInteractiveGradientBg />

        <h1
          className={`relative ${montserrat_alternates.className} whitespace-nowrap font-semibold`}
        >
          Tech Stack
        </h1>
        <span className="relative text-base">
          a result of <i>half-a-decade</i> of continuous learning and
          self-improvements
        </span>

        <div className="flex flex-col gap-2 mt-auto w-full">
          <div
            className="flex justify-between gap-2"
            style={{
              maskImage: "radial-gradient(circle, black, transparent)",
            }}
          >
            {renderTechStack.primary}
          </div>

          <div
            className="flex justify-between items-start gap-2 whitespace-nowrap"
            style={{
              maskImage: "radial-gradient(circle, black, transparent)",
            }}
          >
            {renderTechStack.secondary}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center p-4 min-h-[250px] border bg-black/[20%] border-white/[25%] xl:row-span-2 col-span-3">
        <CardCorners />
        <InteractiveGradientBg />

        <div className="mt-auto h-[40px] md:h-[60px] w-full mb-8 flex justify-center">
          {socials.map(({ name, Icon, link }, index) => {
            return (
              <Link
                key={name}
                href={link}
                target="_blank"
                className={`h-[45px] md:h-[60px] aspect-square rounded-xl bg-black border border-white/30 flex items-center justify-center text-4xl cursor-pointer`}
                style={{
                  "--size": socials.length,
                  "--index": index,
                  transform: `rotate(calc(360 / var(--size) * var(--index) * 1deg))`,
                }}
              >
                <Icon
                  className="text-[24px] sm:text-[32px]"
                  style={{
                    "--size": socials.length,
                    "--index": index,
                    transform: `rotate(calc(360 / var(--size) * var(--index) * -1deg))`,
                  }}
                />
              </Link>
            );
          })}
        </div>

        <h1
          className={`relative ${poppins.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-center`}
        >
          @Creative Ambition
        </h1>

        <p className="relative max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center mt-4 mb-2">
          Get in touch via any of the above platforms
        </p>

        <div className="relative flex gap-4 mt-8 mb-auto">
          <Link
            download={true}
            target="_blank"
            href={"/resume.pdf"}
            className="flex xl:hidden"
          >
            <FancyButtonAlt icon={<PiFilePdfFill />} title="Download Resume" />
          </Link>

          <div className="hidden xl:flex">
            <FancyButtonAlt icon={<FaRegCopy />} title="Copy Email" />
          </div>
        </div>

        <span className="hidden md:flex relative text-sm md:text-base">
          @infinity Studios
        </span>
      </div>

      <div className="flex flex-col items-center p-4 relative min-h-[250px] border border-white/[25%] xl:row-span-2 col-span-3 xl:col-span-2 bg-black/[20%] backdrop-blur-md">
        <CardCorners />

        <span className="mb-4">
          Let&apos;s play a game of{" "}
          <b className={`text-[#61cc9c]`}>Classic Chess😎</b>
        </span>

        <div className="relative my-auto w-full flex flex-col items-center">
          <DynamicGame />
        </div>
      </div>

      <div className="flex justify-center md:hidden p-4 xl:flex flex-col relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <span className="text-center mx-auto self-center">
          Freelance Software Developer{" "}
          <em className="text-[#61cc9c]">@fiverr</em>
        </span>
        <div
          className="h-[70px] my-auto"
          style={{
            backgroundImage: "url('/assets/contact/fiverr.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <FancyButtonAlt
          link="https://www.fiverr.com/users/chrysyt"
          icon={<RiChatSmile3Line />}
          title="Get in touch"
        />
      </div>

      <div className="hidden justify-center p-4 xl:flex flex-col relative min-h-[250px] border border-white/[25%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <h1 className="mx-auto">Download Resume</h1>
        <div
          className="flex-1 w-[65%] mt-1 mb-0 mx-auto"
          style={{
            backgroundImage: "url('/assets/res_illustration.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        <Link
          target="_blank"
          href="/resume.pdf"
          download={true}
          className="flex flex-col mt-auto"
        >
          <FancyButtonAlt icon={<PiFilePdfFill />} title="Download" />
        </Link>
      </div>
    </div>
  );
});

export default BentoGrid;
