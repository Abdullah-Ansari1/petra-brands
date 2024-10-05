import { Img, Button, Heading } from "@/components/ui";
import Link from "next/link";
import React from "react";

export default function Header({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-start gap-[1.25rem]`}>
      <Heading
        size="heading2xl"
        as="h2"
        className="font-tttravelsnexttrl text-[2.00rem] font-black uppercase text-indigo-900 md:text-[1.88rem] sm:text-[1.75rem]"
      >
        Petra Brands
      </Heading>
      <div className="flex items-center gap-[1.00rem] self-end rounded-[30px] bg-black-900_19 p-[0.38rem] pr-[1rem] sm:self-auto">
        <Button
          size="xs"
          variant="fill"
          shape="round"
          colorScheme="indigo_900"
          className="w-full bg-indigo-900 h-auto  rounded-[28px] text-md px-[1rem] py-[0.5rem] font-dmsans font-normal !text-white-a700 sm:px-[1.25rem]"
        >
          Let's Talk
        </Button>
        <Link href="#">
          <Img
            src="bars.svg"
            width={24}
            height={16}
            alt="Thumbs Up Image"
            className="h-[0.5.00rem]"
          />
        </Link>
      </div>
    </div>
  );
}
