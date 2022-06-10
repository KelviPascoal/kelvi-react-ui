import * as React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "opaque" | "transparent";
  icon?: JSX.Element;
};

export function Button({
  children,
  onClick,
  variant = "default",
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper variant={variant} onClick={onClick} {...props}>
      {!!icon && icon}
      <p>{children}</p>
    </S.Wrapper>
  );
}
