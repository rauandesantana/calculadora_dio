import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  width: 90px;
  height: 90px;
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({size}) => (size !== "") && css`
    width: ${parseInt(size) * 92}px;
  `}
`;

export const ButtonObject = styled.button`
  width: 100%;
  height: 100%;
  border: 2px solid #3D3D3D;
  border-radius: 1rem;
  background-color: #828282;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  ${({bgColor}) => (bgColor !== "") && css`
    background-color: ${bgColor};
  `}
`;