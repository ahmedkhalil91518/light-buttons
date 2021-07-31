import { useState } from "react";
import styled from "styled-components";
import LightBulb from "./LightBulb";
import LightSwitch from "./LightSwitch";

const Box = styled.div`
  position: relative;
  border-style: solid;
  border-width: 5px;
  border-radius: 5px;
  width: 500px;
  height: 500px;
  margin: auto;
`;

function Room() {
  const [turnedOnLeft, setTurnedOnLeft] = useState(false);
  const [turnedOnRight, setTurnedOnRight] = useState(true);

  const handleTurnedOnLeft = () => setTurnedOnLeft((prev) => !prev);
  const handleTurnedOnRight = () => setTurnedOnRight((prev) => !prev);

  return (
    <Box>
      <LightBulb position="left" turnedOn={turnedOnLeft}></LightBulb>
      <LightBulb position="right" turnedOn={turnedOnRight}></LightBulb>
      <LightSwitch
        position="left"
        turnedOn={turnedOnLeft}
        callback={handleTurnedOnLeft}
      ></LightSwitch>
      <LightSwitch
        position="right"
        turnedOn={turnedOnRight}
        callback={handleTurnedOnRight}
      ></LightSwitch>
    </Box>
  );
}

export default Room;
