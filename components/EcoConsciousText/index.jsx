import { Text } from "@/components/ui";
import React from "react";

export default function EcoConsciousText({
  textContent = "Eco-conscious household and personal hygiene essentials",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-end w-[24%] md:w-full px-[1.00rem] py-[4.88rem] md:py-[1.25rem] bg-blue_gray-50 rounded-[24px]`}
    >
      <Text
        size="text3xl"
        as="p"
        className="mt-[2.50rem] self-stretch text-center text-[1.25rem] font-normal leading-[1.50rem] tracking-[0.00rem] text-indigo-900"
      >
        {textContent}
      </Text>
    </div>
  );
}
