import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #010e1c;
  color: #fffbfb;
  padding: 20px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;`;

function Header() {
  return <HeaderContainer>Dashboard</HeaderContainer>;
}

export default Header;