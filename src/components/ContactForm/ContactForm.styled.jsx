import styled from 'styled-components';
import {
  Form as FormWrap,
  Field as Input,
  ErrorMessage as Error,
} from 'formik';

export const Form = styled(FormWrap)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 380px;
  margin-bottom: 10px;
`;

export const Field = styled(Input)`
  font-size: 22px;
  width: 292px;
`;

export const Label = styled.label`
  font-size: 25px;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(Error)``;

export const Button = styled.button`
  width: 300px;
  height: 30px;
  font-size: 22px;
  cursor: pointer;
`;
