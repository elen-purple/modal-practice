import styled from "styled-components";

export const Backdrop = styled.div`
  background-color: rgba(1, 1, 1, 0.3);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Div = styled.div`
  width: 400px;
  padding: 80px 32px 60px;
  position: absolute;
  top: calc(50% - 100px);
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  font-weight: 900;
  color: #272f10ff;
  text-align: center;
`;

export const Btn = styled.button`
  padding: 6px 18px;
  position: absolute;
  top: 20px;
  right: 32px;
  background-color: #7da6ffff;
  border: 4px #272f10ff solid;
  font-weight: 900;
  color: #272f10ff;
  border-radius: 12px;
  width: max-content;
  &:hover {
    box-shadow: 0px 0px 6px 2px #272f10ff;
  }
`;
