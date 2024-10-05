"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full flex items-center justify-center cursor-text text-black-900_02 tracking-[0.00rem] capitalize text-[1.44rem] border-b border-black-900_02 border-solid",
  {
    variants: {
      variant: {
        underline: "text-black-900_02 border-b border-black-900_02 border-solid",
      },
      size: {
        xs: "h-[2.38rem] px-[0.13rem] text-[1.44rem]",
      },
      shape: {
        square: "rounded-[0px]",
      },
    },
    defaultVariants: {},
  }
);

const Input = React.forwardRef(
  ({ variant = "underline", colorScheme = "black_900_02", shape, size = "xs", className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, colorScheme, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

const InputGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("relative flex w-full", className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("absolute aspect-square h-full left-0 justify-center flex items-center", className)} ref={ref} {...props}>
      {children}
    </div>
  );
});

InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("absolute aspect-square h-full right-0 justify-center flex items-center", className)} ref={ref} {...props}>
      {children}
    </div>
  );
});

InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };
