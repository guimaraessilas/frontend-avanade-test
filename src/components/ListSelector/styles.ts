import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  
  input {
    padding: 8px;
    border-radius: 5px;
    margin-right: 8px;
  }
`;

export const Selector = styled.select`
  padding: 8px;
  width: 20%;
  border: 1px solid var(--color-white);
  border-radius: 5px;
  margin-right: 8px;
`;

export const AddListButton = styled.button`
  background-color: #f66;
  color: white;
  font-weight: bold;
  width: 48px;
  height: 48px;
  font-size: 36px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

export const SearchInput = styled.input
  .attrs({
    type: 'text',
    placeholder: 'New list name',

  })`
  padding: 14px 8px;
  margin: 10px 0 20px;
  color: #000;
  border: 1px solid #555;
  width: 70%;
`;

export const ListItem = styled.option``;

export const Column = styled.div`
  flex: 1;
`;