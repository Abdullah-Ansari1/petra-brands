import { Text, Heading, Img } from "@/components/ui";
import React from "react";

export default function UserProfile1({
  userImage = "img_television.svg",
  headingText = "Relentless Curiosity",
  descriptionText = "We challenge the status quo. With open minds and a passion for learning, we explore new possibilities and seek out innovative solutions every day.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-[0.50rem] px-[2.00rem] py-[2.50rem] sm:p-[1.25rem] bg-amber-300 rounded-[32px]`}
    >
      <Img
        src={userImage}
        width={90}
        height={90}
        alt="Television Image"
        className="h-[5.63rem] w-[5.63rem] rounded-[3px]"
      />
      <div className="mb-[2.00rem] flex flex-col items-start gap-[0.38rem] self-stretch">
        <Heading
          size="heading3xl"
          as="h5"
          className="text-[1.25rem] font-bold text-gray-900_01"
        >
          {headingText}
        </Heading>
        <Text
          size="textlg"
          as="p"
          className="w-[96%] text-[1.00rem] font-normal leading-[1.50rem] text-gray-800_01"
        >
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
