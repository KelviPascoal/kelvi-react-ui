import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f1f1f1;
  height: 2.4rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  svg {
    color: #7303fc;
    font-size: 1.6rem;
    margin: 0 0.8rem;
  }

  input {
    width: 100%;
    font-size: 1.6rem;
    color: #191919;
    font-weight: 400;
    background-color: transparent;
    border: 0;
    padding-left: 1.6rem;
    :focus {
      outline: none;
    }
  }
`;
