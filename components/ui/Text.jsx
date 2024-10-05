import React from "react";

const sizes = {
  textxs: "text-[0.69rem] font-normal not-italic",
  texts: "text-[0.88rem] font-normal not-italic",
  textmd: "text-[0.94rem] font-normal not-italic",
  textlg: "text-[1.00rem] font-normal not-italic",
  textxl: "text-[1.13rem] font-normal not-italic",
  text2xl: "text-[1.19rem] font-normal not-italic",
  text3xl: "text-[1.25rem] font-normal not-italic",
  text4xl: "text-[1.31rem] font-normal not-italic",
  text5xl: "text-[1.38rem] font-normal not-italic",
  text6xl: "text-[1.44rem] font-normal not-italic md:text-[1.31rem]",
  text7xl: "text-[1.50rem] font-normal not-italic md:text-[1.38rem] sm:text-[1.44rem]",
  text8xl: "text-[1.63rem] font-normal not-italic md:text-[1.56rem] sm:text-[1.44rem]",
  text9xl: "text-[1.81rem] font-normal not-italic md:text-[1.69rem] sm:text-[1.56rem]",
  text10xl: "text-[1.88rem] font-normal not-italic md:text-[1.75rem] sm:text-[1.63rem]",
  text13xl: "text-[2.31rem] font-normal not-italic md:text-[2.06rem]",
  text14xl: "text-[2.44rem] font-normal not-italic md:text-[2.19rem] sm:text-[2.06rem]",
  text15xl: "text-[2.50rem] font-normal not-italic md:text-[2.25rem] sm:text-[2.19rem]",
  text16xl: "text-[2.88rem] font-normal not-italic md:text-[2.63rem] sm:text-[2.25rem]",
};

const Text = ({ children, className = "", as, size = "text16xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
