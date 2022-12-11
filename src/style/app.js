import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2B2B2B;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 1rem;
  background-color: #494949;

  display: flex;
  flex-flow: row nowrap
  justify-content: center;
  align-items: center;
`;

export const Calculator = styled.div`
  width: 400px;
  height: 100%;
  padding: 10px;
  border-radius: 1rem 0px 0px 1rem;

  display: flex;
  flex-flow: column nowrap;
  flex-grow: 6;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  flex-grow: 1;
`;