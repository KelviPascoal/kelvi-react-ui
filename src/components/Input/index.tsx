import * as React from "react";
import { InputHTMLAttributes } from "react";
import * as S from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element;
};

export function Input({ icon, ...props }: InputProps) {
  return (
    <S.Wrapper>
      {icon && icon}
      <input {...props} />
    </S.Wrapper>
  );
}
