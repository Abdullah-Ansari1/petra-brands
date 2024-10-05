import { Text, Img } from "@/components/ui";
import React from "react";

export default function CertificationBadge({
  globeImage = "img_globe.svg",
  certificationText = "LEAPING BUNNY CRUELTY FREE CERTIFIED",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-[0.25rem]`}>
      <Img
        src={globeImage}
        width={84}
        height={84}
        alt="Globe Image"
        className="ml-[1.63rem] mr-[1.50rem] h-[5.25rem] w-[5.25rem]"
      />
      <Text
        size="textxs"
        as="p"
        className="self-stretch text-center font-dmsans text-[0.69rem] font-normal leading-[0.63rem] tracking-[0.00rem] text-black-900_02"
      >
        {certificationText}
      </Text>
    </div>
  );
}
