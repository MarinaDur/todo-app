import { styled } from "styled-components";
import Flex from "../ui/Flex";
import LogoAndTheme from "./LogoAndTheme";
import Input from "../ui/Input";
import Todos from "./Todos";
import ClearCompleted from "./ClearCompleted";
import Filter from "./Filter";
import Paragraph from "../ui/Paragraph";
import DragnDropText from "./DragnDropText";
import { useTodo } from "../context/TodoContext";

const StyledAllComp = styled(Flex)`
  width: 90%;
  z-index: 9999;
  padding: 6rem 0 0;
  max-width: 480px;

  @media (min-width: 1024px) {
    padding: 8rem 0 0;
  }
`;

function AllComp() {
  const { handleValue, value, handleDownKey, todoList } = useTodo();
  return (
    <StyledAllComp>
      <LogoAndTheme />
      <Input
        handleChange={handleValue}
        value={value}
        handleKey={handleDownKey}
      />
      <Todos />
      {todoList.length > 0 && (
        <>
          <ClearCompleted />
          <Filter />
          <DragnDropText />
        </>
      )}
    </StyledAllComp>
  );
}

export default AllComp;
