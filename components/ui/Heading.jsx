import React from "react";

const sizes = {
  text11xl: "text-[2.00rem] font-medium md:text-[1.88rem] sm:text-[1.75rem]",
  text12xl: "text-[2.06rem] font-medium md:text-[1.94rem] sm:text-[1.81rem]",
  text17xl: "text-[3.00rem] font-medium md:text-[2.75rem] sm:text-[2.38rem]",
  text18xl: "text-[4.69rem] font-medium md:text-[3.00rem]",
  text19xl: "text-[8.38rem] font-medium md:text-[3.00rem]",
  headingxs: "text-[1.00rem] font-bold",
  heading: "text-[1.13rem] font-bold",
  headingxl: "text-[1.88rem] font-bold md:text-[1.75rem] sm:text-[1.63rem]",
  heading2xl: "text-[2.00rem] font-black md:text-[1.75rem]",
  heading3xl: "text-[2.19rem] font-bold md:text-[1.94rem] sm:text-[1.81rem]",
  heading4xl: "text-[3.06rem] font-bold md:text-[2.19rem] sm:text-[2.44rem]",
  heading5xl: "text-[3.13rem] font-semibold md:text-[3.00rem]",
  heading6xl: "text-[4.50rem] font-semibold md:text-[3.00rem]",
  heading7xl: "text-[5.50rem] font-semibold md:text-[3.00rem]",
  heading8xl: "text-[6.00rem] font-semibold md:text-[3.00rem]",
  heading9xl: "text-[6.13rem] font-semibold md:text-[3.00rem]",
  heading10xl: "text-[8.56rem] font-black md:text-[3.00rem]",
  heading11xl: "text-[8.63rem] font-black md:text-[3.00rem]",
};

const Heading = ({ children, className = "", size = "text11xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-900 ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
