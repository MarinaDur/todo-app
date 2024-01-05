import { styled, css } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import { useTodo } from "../context/TodoContext";

const StyledFilterCateg = styled(Flex)`
  gap: 1rem;
  flex-direction: row;

  @media (max-width: 1023px) {
    ${(props) =>
      props.$screen === "big" &&
      css`
        display: none;
      `}
  }
`;

function FilterCateg({ screen }) {
  const { handleFilter, filter } = useTodo();
  return (
    <StyledFilterCateg $screen={screen}>
      <Paragraph
        $type="filter"
        onClick={() => handleFilter("All")}
        $clicked={filter === "All"}
      >
        All
      </Paragraph>
      <Paragraph
        $type="filter"
        onClick={() => handleFilter("Active")}
        $clicked={filter === "Active"}
      >
        Active
      </Paragraph>
      <Paragraph
        $type="filter"
        onClick={() => handleFilter("Completed")}
        $clicked={filter === "Completed"}
      >
        Completed
      </Paragraph>
    </StyledFilterCateg>
  );
}

export default FilterCateg;
