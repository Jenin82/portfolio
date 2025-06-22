"use client";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const StoryAndDetailsCard = () => {
  const [showStory, setShowStory] = useState(true);

  useEffect(() => {
    let detailsCard = document.querySelector(".details-card");
    detailsCard.addEventListener("mouseleave", () => {
      detailsCard.classList.add("return");

      setTimeout(() => {
        detailsCard.classList.remove("return");
      }, 500);
    });

    return () => {
      detailsCard.removeEventListener("mouseout", () => {});
    };
  });

  function yearsSince(dateString) {
    const pastDate = new Date(dateString);

    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - pastDate.getFullYear();

    const monthDifference = currentDate.getMonth() - pastDate.getMonth();
    const dayDifference = currentDate.getDate() - pastDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return yearsDifference - 1;
    }

    return yearsDifference;
  }

  return (
    <div className={`flex flex-1 flex-col mt-1 md:mt-4 gap-2 w-full z-50`}>
      <h2 className="font-semibold">
        {showStory ? (
          <>
            How it all started{" "}
            <i className="text-[#61cc9c]">
              {"{"} story time! {"}"}
            </i>
          </>
        ) : (
          "Profile"
        )}
        <hr className="mt-2 md:mt-3" />
      </h2>

      {showStory ? (
        <p className="text-md md:text-base tracking-wide">
          I started as a curious μLearner at μLearn{" "}
          <i className="text-[#61cc9c]">{`{ always curious! }`}</i>,<br />
          Picked up Django, then React{" "} <br />
          <i className="text-[#61cc9c]">{`{ code, break, repeat }`}</i>,<br />
          and before I knew it, I was leading frontend{" "}
          <i className="text-[#61cc9c]">{`{ team captain vibes }`}</i>,<br />
          then the whole tech team{" "} <br />
          <i className="text-[#61cc9c]">{`{ boss level unlocked }`}</i>!<br />
          Eventually, I started my own adventure with FunDesign{" "} <br />
          <i className="text-[#61cc9c]">{`{ founder feels! }`}</i>.<br />
          Still learning, still building, always having fun{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>
      ) : (
        <div className="text-md md:text-base flex flex-col gap-2 tracking-wide">
          <h2>
            name ~{" "}
            <i className="font-medium text-[#61cc9c]">Jenin Joseph</i>
          </h2>
          <h2>
            email ~{" "}
            <i className="font-medium text-[#61cc9c]">
              jeninjoseph.official@gmail.com
            </i>
          </h2>
          <h2>
            address ~{" "}
            <i className="font-medium text-[#61cc9c]">
              Ernakulam, Kerala, India
            </i>
          </h2>
          <h2>
            phone ~{" "}
            <i className="font-medium text-[#61cc9c]">(+91) 88486 87988</i>
          </h2>
          <hr className="opacity-25" />
          <h2>
            nationality ~ <i className="font-medium text-[#61cc9c]">Indian</i>
          </h2>
          <h2>
            age ~{" "}
            <i className="font-medium text-[#61cc9c]">
              {yearsSince("2000-07-12")}
            </i>
          </h2>
          <h2>
            gender {"{"} default {"}"} ~{" "}
            <i className="font-medium text-[#61cc9c]">Male</i>
          </h2>
        </div>
      )}

      <button
        className="relative flex items-center justify-center gap-2 mt-auto border border-[#61cc9c]/[40%] py-3 before:absolute before:size-[10px] before:left-0 before:top-0 before:border-2 before:border-[#61cc9c] before:border-b-0 before:border-r-0 after:absolute after:size-[10px] after:right-0 after:bottom-0 after:border-2 after:border-[#61cc9c] after:border-t-0 after:border-l-0"
        onClick={(event) => {
          setShowStory((prev) => !prev);
        }}
      >
        {showStory ? (
          <>
            <span className="text-sm md:text-base">View Profile</span>
            <div className="text-2xl">
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
          </>
        ) : (
          <>
            <div className="text-sm md:text-base">
              <MdOutlineKeyboardDoubleArrowLeft />
            </div>
            <span>Back to Story</span>
          </>
        )}
      </button>
    </div>
  );
};

export default StoryAndDetailsCard;
