import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 400px;
  margin-bottom: 15px;
`;

export const FilterTitle = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 22px;
  color: rgb(87, 155, 177);
`;

export const FilterInput = styled.input`
  width: 180px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 16px;
`;
