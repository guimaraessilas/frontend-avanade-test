import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 90%;
  background-color: var(--color-white);
  border-radius: 16px;
  overflow-x: auto;
  padding: 16px 8px;
  margin-top: 16px;
  font-size: 12px;
  @media (min-width: 768px) {
    margin-top: 0px;
    padding: 16px 20px;
    font-size: 14px;
  }
`;

export const TableHeader = styled.th`
  display: flex;
  padding: 12px;
  background-color: #f66;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 24px;
  @media (min-width: 768px) {
    padding: 16px;
    font-size: 14px;
  }
`;

export const TableRow = styled.tr`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #fff;
  background-color: #cdcdcd;
  &:last-child {
    border-bottom: none;
  }
  @media (min-width: 320px) {
    padding: 16px;
    
  }
`;

export const TableCell = styled.th`
  flex: 1;
  text-align: center;
  padding: 4px;
  font-size: 16px;
  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }
`;