import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
    width: 100%;

    > a {
      display: block;
      margin: 16px 0;
      padding: 16px;
      text-decoration: none;
      color: #e91e63;
      font-weight: bold;
      width: 100%;
      text-align: center;
      border-radius: 10px;

      &:hover {
        background: ${shade(0.2, '#f5f5f5')};
      }
    }
  }
`;
