import styled from "styled-components";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: ${(props) => (props.position === "left" ? "20px" : "380px")};
  bottom: 20px;
  border-style: solid;
  cursor: pointer;
  text-align: center;
  font-size: large;
  font-weight: bold;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function LightSwitch({ position, turnedOn, callback }) {
  return (
    <Wrapper position={position} turnedOn={turnedOn} onClick={callback}>
      <div>{turnedOn === true ? "on" : "off"}</div>
    </Wrapper>
  );
}

export default LightSwitch;
