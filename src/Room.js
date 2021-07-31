import styled from "styled-components";

const Box = styled.div`
border-style: solid;
border-width: 5px;
border-radius: 5px;
width: 75%;
height: 500px;
margin: auto;
`;

function Room() {
  return <Box></Box>;
}

export default Room;
