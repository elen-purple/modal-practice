import styled from "styled-components";

export const For = styled.form`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 6px 18px;
  background-color: #bbff00ff;
  border: 4px #272f10ff solid;
  font-weight: 900;
  color: #272f10ff;
  border-radius: 12px;
  width: max-content;
  &:hover {
    box-shadow: 0px 0px 6px 2px #272f10ff;
  }
  &::placeholder {
    color: #272f10ff;
  }
`;
