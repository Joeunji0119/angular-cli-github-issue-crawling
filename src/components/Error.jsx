import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Error = () => {
  return (
    <Background>
      <ErrorText>화면을 불러오는데 실패했습니다.</ErrorText>
    </Background>
  );
};

export default Error;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;
