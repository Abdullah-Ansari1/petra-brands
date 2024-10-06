import { Text, Heading, Button, Img } from "@/components/ui";
import Link from "next/link";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-[1rem]`}>
      <div className="flex">
      <div className="mx-auto gap-4 flex w-full max-w-[83.25rem] items-start justify-center self-stretch md:flex-col md:px-[1.25rem]">
        <Text size="texts" as="p" className="mt-[0.63rem] font-dmsans text-[0.88rem] font-normal uppercase tracking-[0.06rem] text-[#000]">
          explore
        </Text>
        <ul className="ml-[3.8rem] flex flex-col items-start self-center md:ml-0">
          <li>
            <Link href="Home" target="_blank" rel="noreferrer" className="md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Home
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="mt-[0.38rem] md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                About Us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="mt-[0.38rem] md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Our Brands
              </Text>
            </Link>
          </li>
          <li>
            <Link href="Manufacturing" target="_blank" rel="noreferrer" className="mt-[0.38rem] md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Manufacturing
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="mt-[0.75rem] md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Petra Plus
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="mt-[0.75rem] md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Contact Us
              </Text>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mb-auto gap-4 flex w-full max-w-[83.25rem] items-start justify-center self-stretch md:flex-col md:px-[1.25rem]">
        <Text size="texts" as="p" className="mt-[0.63rem] font-dmsans text-[0.88rem] font-normal uppercase tracking-[0.06rem] text-[#000]">
          Follow Us
        </Text>
        <ul className="ml-[3.8rem] flex flex-col items-start self-center md:ml-0 gap-3">
          <li className="flex gap-8 items-center">
          <Img src="img_facebook.svg" width={32} height={32} alt="Facebook Icon" className="h-[2.00rem] w-[2.00rem]" />
            <Link href="facebook" target="_blank" rel="noreferrer" className="md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Facebook
              </Text>
            </Link>
          </li>
          <li className="flex gap-8 items-center">
          <Img src="img_linkedin.svg" width={32} height={32} alt="Facebook Icon" className="h-[2.00rem] w-[2.00rem]" />
            <Link href="facebook" target="_blank" rel="noreferrer" className="md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Linkedin
              </Text>
            </Link>
          </li>
          <li className="flex gap-8 items-center">
          <Img src="img_instagram.svg" width={32} height={32} alt="Facebook Icon" className="h-[2.00rem] w-[2.00rem]" />
            <Link href="facebook" target="_blank" rel="noreferrer" className="md:text-[2.63rem] sm:text-[2.25rem]">
              <Text as="p" className="text-[2.88rem] font-normal text-gray-900_02">
                Instagram
              </Text>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto gap-4 flex flex-col w-full max-w-[83.25rem] items-end self-stretch md:flex-col md:px-[1.25rem]">
          <Link href="#">
            <Text size="texts" as="p" className="font-dmsans text-[0.88rem] font-normal uppercase tracking-[0.06rem] text-[#000]">
              Contact Us
            </Text>
          </Link>
          <Text size="text10xl" as="p" className="text-[1.88rem] font-normal text-gray-900_02 md:text-[1.75rem] sm:text-[1.63rem]">
            Info@petrabrands.com
          </Text>
        </div>
      </div>
      <div className="text-left">
      <Button size="sm" className="ml-auto px-[1rem] w-fit gap-[0.75rem] rounded-[38px] !border-[1.5px] border-[#000] font-normal">
          Sign up to our newsletter
        </Button>
      </div>
      <div className="text-center m-auto w-full">
        <Heading as="h1" className="mx-auto font-tttravelsnexttrl text-[6rem] !font-black uppercase text-indigo-900 md:text-[3.00rem]">
          Petra Brands
        </Heading>
      </div>
      <div className="flex justify-between gap-1">
        <Text size="textxl" as="p" className="font-dmsans text-[1.13rem] font-medium text-black-900_02">
         2024 © petrabrands.com
        </Text>
        <ul className="flex flex-wrap gap-[0.63rem]">
          <li>
            <Link href="Contact" target="_blank" rel="noreferrer">
              <Text size="textxl" as="p" className="font-dmsans text-[1.13rem] font-normal text-black-900_02">
                Contact
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text size="textxl" as="p" className="font-dmsans text-[1.13rem] font-normal text-black-900_02">
                Privacy Policy
              </Text>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
