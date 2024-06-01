import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Content = styled.div`
flex: 1;
`;