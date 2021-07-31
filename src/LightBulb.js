import styled from "styled-components";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;  position: absolute;
  left:  ${(props) => (props.position === "left" ? "20px" : "380px")};
  margin-top: 20px;
  background-color: ${(props) =>
    props.turnedOn === true ? "orange" : "white"};
  border-style: solid;
`;

function LightBulb({position, turnedOn}) {
  return <Wrapper position={position} turnedOn={turnedOn}></Wrapper>;
}

export default LightBulb;
