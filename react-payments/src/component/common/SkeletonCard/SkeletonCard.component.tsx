import styled, { keyframes } from "styled-components";
import Box from "../../../styles/box";

const Refresh = keyframes`
  0% {
    background-position: calc(-100px);
  }
  40%{
    background-position: 300px;
  }
  100% {
    background-position: 300px;
  }
`;

const SkeletonCardContainer = styled.div`
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: ${Refresh} 2s infinite ease-out;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  width: 208px;
  height: 130px;
`;

const SkeletonCardText = styled.div`
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: ${Refresh} 2s infinite ease-out;
  width: 90px;
  height: 24px;
  border-radius: 5px;
`;

const SkeletonCardBox = () => {
  return (
    <Box
      gap="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb="20px"
    >
      <SkeletonCardContainer />
      <SkeletonCardText />
    </Box>
  );
};

export default SkeletonCardBox;
