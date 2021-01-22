import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  padding: 16px;
  border-radius: 10px;
  width: 80%;
  border: 2px solid #b0bec5;
  background: #b0bec5;
  color: #757575;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #e91e63;
      border-color: #e91e63;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #e91e63;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #212121;

    &::placeholder {
      color: #757575;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
