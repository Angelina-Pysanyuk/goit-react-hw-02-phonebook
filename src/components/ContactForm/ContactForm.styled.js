import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonAdd = styled.button`
  width: 100px;
  height: 65px;
  border: none;
  border-radius: 6px;
  color: #8b7e74;
  background-color: #ece8dd;
  font-size: 18px;

  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  &:hover,
  &:focus {
    border-color: #579bb1;
    background-color: #579bb1;
    color: #ffffff;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 180px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 16px;
`;
