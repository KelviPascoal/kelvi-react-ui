import styled, { css } from "styled-components";

import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, "variant">;

const variants = {
  default: () => css`
    background-color: #7303fc;
    color: #fff;
  `,
  opaque: () => css`
    background-color: #f1f1f1;
    color: #7303fc;
  `,
  transparent: () => css`
    background-color: transparent;
    color: #7303fc;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ variant }) => css`
    ${variant && variants[variant]}
    font-size: 1.6rem;
    height: 2.4rem;
    padding: 0 1.6rem;
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }
  `}
`;
