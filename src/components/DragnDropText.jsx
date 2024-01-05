import { styled } from "styled-components";
import Paragraph from "../ui/Paragraph";

const StyledDragnDropText = styled(Paragraph)`
  margin-top: 3rem;
  width: 100%;
`;

function DragnDropText() {
  return (
    <StyledDragnDropText $type="drag">
      Drag and dtop to reorder list
    </StyledDragnDropText>
  );
}

export default DragnDropText;
