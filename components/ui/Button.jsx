"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        outline: {
          black_900_02:
            "border-black-900_02 border-[2.73px] border-solid text-black-900_02",
          black_900:
            "border-black-900 border-[1.17px] border-solid text-black-900",
          white_A700_01:
            "border-white-A700_01 border-[1.17px] border-solid text-white-A700_01",
        },
        fill: {
          indigo_900: "bg-indigo-900 text-white-a700_01",
          red_300: "bg-red-300 text-white-a700_01",
        },
      },
      size: {
        "2xl": "h-[4.5rem]",
        sm: "h-[3.00rem] pl-[1.50rem] pr-[0.38rem] text-[1.3rem]",
        xl: "h-[3.50rem] px-[2.00rem] text-[1.3rem]",
        xs: "h-[3.25rem] pl-[1.25rem] pr-[0.38rem] text-[1.3rem]",
        md: "h-[4.75rem] pl-[2.12rem] pr-[1.12rem] text-[2.00rem]",
        lg: "h-[3.25rem] pl-[1.87rem] pr-[1.00rem] text-[1.3rem]",
      },
      shape: {
        square: "rounded-[0px]",
        round: "rounded-[24px]",
      },
    },
    defaultVariants: {},
  }
);

const Button = React.forwardRef(
  (
    {
      colorScheme = "black_900_02",
      variant = "outline",
      shape,
      size = "lg",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            colorScheme,
            size,
            shape,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
