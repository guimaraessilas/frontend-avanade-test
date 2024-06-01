import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 16px;
  padding: 8px;
  @media (min-width: 768px) {
    width: 30%;
    padding: 16px 20px;
  }
  max-width: 410px;
  
`;

export const SearchInput = styled.input`
  padding: 14px 8px;
  margin: 10px 0 20px;
  border-color: var(--color-bg);
  background-color: var(--color-bg);
  border-style: ridge;
  border-radius: 5px;
  width: calc(100% - 20px);
  `;

export const ListItem = styled.div`
  padding: 16px 8px;
  border-bottom: 1px solid #cdcdcd;
  width: calc(100% - 20px);
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const AddButton = styled.button`
  background-color: #f66;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 40%;
  margin: 0 10px;
  font-size: 1.2em
`;
