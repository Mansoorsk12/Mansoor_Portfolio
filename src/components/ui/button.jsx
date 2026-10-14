
import * as React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:-translate-y-0.5",
        hero:
          "bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 text-white shadow-lg hover:-translate-y-1",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-slate-200 bg-white text-slate-800 hover:bg-violet-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900",
        link:
          "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className = "", variant, size, type = "button", ...props }, ref) => {
    const classes = buttonVariants({ variant, size });

    return (
      <button
        ref={ref}
        type={type}
        className={`${classes} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
