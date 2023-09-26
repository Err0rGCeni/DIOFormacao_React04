import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #565656;
  border-radius: 22px;
  position: relative;
  color: #FFF;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  border: none;
  
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;
      background: #E41850;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #E4105D;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
