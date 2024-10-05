import React from "react";
import { Root } from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    return (
      <Root
        orientation={orientation}
        decorative={decorative}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[2px] w-full" : "h-full w-[2px]", // Increased thickness for consistency
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator"; // Set correct display name for easier debugging

export { Separator };
