import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", children, ...rest }: Props) {
  return (
    <button
      className={clsx(
        "btn",
        variant === "secondary" && "btn-secondary",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
