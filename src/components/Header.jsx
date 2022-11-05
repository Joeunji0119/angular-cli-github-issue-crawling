/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const TogoMain = () => {
    navigate("/");
  };
  return <Layout onClick={TogoMain}>Angular / Angular-cli </Layout>;
};

export default Header;

export const Layout = styled.div`
  top: 0;
  right: 1px;
  position: fixed;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: white;
  cursor: pointer;
`;
