import React from 'react'
import { Heading } from '../ui'

const BannerMarquee = () => {
  const repeatCount = 6;
  const headingText = "DISRUPTING CATEGORIES • CREATING AT THE SPEED OF CHANGE • DISRUPTING CATEGORIES •";
  return (
    <div className="rotate-[-4deg]">
      <div className="w-[110vw] left-[-10vw] relative overflow-hidden whitespace-nowrap bg-red-300 py-2 text-white text-xl font-semibold">
        <div className="animate-marquee flex gap-4">
          {[...Array(repeatCount)].map((_, index) => (
            <Heading
              key={index}
              as="h2"
              className="self-end font-dmsans text-[2.00rem] font-medium uppercase leading-[2.06rem] tracking-[0.00rem] text-white-a700_01 md:w-full md:self-auto md:text-[1.88rem] sm:text-[1.75rem]"
            >
              {headingText}
            </Heading>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BannerMarquee
