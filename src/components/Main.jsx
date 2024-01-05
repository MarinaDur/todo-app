import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Header from "./Header";
import AllComp from "./AllComp";

const StyledMain = styled(Flex)`
  /* justify-content: center; */
  background: var(--cl-bg-main);
  width: 100%;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  padding-bottom: 5rem;
`;

function Main() {
  return (
    <StyledMain>
      <Header />
      <AllComp />
    </StyledMain>
  );
}

export default Main;
