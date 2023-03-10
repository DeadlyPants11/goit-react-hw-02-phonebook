import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  font-size: 25px;
  padding-bottom: 10px;
  display: flex;

  align-items: center;

  svg {
    padding-right: 5px;
  }
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  outline: none;
  margin-left: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  background-color: inherit;

  svg {
    width: 20px;
    height: 20px;
    padding: 0;
  }
`;
