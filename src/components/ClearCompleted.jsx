import { styled } from "styled-components";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import { useTodo } from "../context/TodoContext";
import FilterCateg from "./FilterCateg";

const StyledClearCompleted = styled(Container)`
  z-index: 99999;
`;

function ClearCompleted() {
  const { activeItems, handleClearCompleted } = useTodo();
  return (
    <StyledClearCompleted>
      <Paragraph $type="clear">{activeItems} items left</Paragraph>
      <FilterCateg screen="big" />
      <Paragraph $type="clear" $align="right" onClick={handleClearCompleted}>
        Clear Completed
      </Paragraph>
    </StyledClearCompleted>
  );
}

export default ClearCompleted;
