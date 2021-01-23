import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 16px 0px;
  padding: 16px;
  height: 56px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  width: 100%;
  background: #e91e63;

  &:hover {
    background: ${shade(0.2, '#e91e63')};
  }

  > svg {
    font-size: 24px;
  }
`;
