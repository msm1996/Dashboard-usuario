import styled from "styled-components";

const Side = styled.div`
  width: 200px;
  background:  #010e1c;
  color: white;
  padding: 20px;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

function Sidebar() {
  return <Side>Menu</Side>;
}

export default Sidebar;