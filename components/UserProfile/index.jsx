import { Text, Heading, Img } from "@/components/ui";
import React from "react";

export default function UserProfile({
  userImage = "img_rectangle_148884.png",
  userName = "Mursal Khedri",
  userOccupation = "Graphic Designer",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[39.75rem] w-[25.13rem] md:px-[1.25rem] relative`}>
      <Img
        src={userImage}
        width={402}
        height={636}
        alt="Profile Image"
        className="mx-auto h-[39.75rem] w-full flex-1 rounded-[30px] object-cover"
      />
      <div className="absolute bottom-[0.00rem] left-0 right-0 m-auto flex flex-1 flex-col items-start justify-end rounded-bl-[30px] rounded-br-[30px] bg-gradient px-[2.00rem] py-[1.25rem] sm:px-[1.25rem]">
        <Heading
          size="heading3xl"
          as="h2"
          className="mt-[12.88rem] text-[2.19rem] font-bold tracking-[-0.00rem] text-white-a700_01"
        >
          {userName}
        </Heading>
        <Text
          size="text7xl"
          as="p"
          className="text-[1.5rem] font-normal tracking-[0.00rem] text-gray-300"
        >
          {userOccupation}
        </Text>
      </div>
    </div>
  );
}
