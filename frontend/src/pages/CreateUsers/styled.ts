import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > a {
    align-self: flex-start;
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #757575;
    margin: 0;

    svg {
      margin-right: 8px;
      color: #757575;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 24px 0px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 24px 0px;

    > h1 {
      align-self: flex-start;
      color: #757575;
      font-weight: bold;
      margin-bottom: 24px;
    }

    div {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export const RowButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px 0px;

  button {
    max-width: 200px;
  }
`;

export const Line = styled.div`
  background: #757575;
  width: 100%;
  height: 1px;
`;
