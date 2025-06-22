import { Showcase2, Showcase } from "@/lib/utils";

import dynamic from "next/dynamic";

const ShowcaseRow = dynamic(() => import("./ShowcaseRow"), {
  ssr: true,
  loading: null,
});

function ShowcaseMarque() {
  return (
    <div className="relative min-h-[100vh] w-screen flex justify-center items-center pb-10">
      <div
        id="skills"
        className="flex flex-col w-full items-center gap-4 mt-24 md:gap-8 skew-y-12 bg-[#61cc9c] py-10"
      >
        <div className="flex flex-col w-full md:gap-8 items-center">
          <ShowcaseRow skills={Showcase} reverse={false}></ShowcaseRow>
          <ShowcaseRow skills={Showcase2} reverse={true}></ShowcaseRow>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseMarque;
