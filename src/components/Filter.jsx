import { styled } from "styled-components";
import Container from "../ui/Container";
import FilterCateg from "./FilterCateg";

const StyledFilter = styled(Container)`
  justify-content: center;
  margin-top: 2rem;
  box-shadow: 0px 41px 114px -16px var(--cl-shadow);
  -webkit-box-shadow: 0px 41px 114px -16px var(--cl-shadow);
  -moz-box-shadow: 0px 41px 114px -16px var(--cl-shadow);

  @media (min-width: 1024px) {
    display: none;
  }
`;

function Filter() {
  return (
    <StyledFilter>
      <FilterCateg />
    </StyledFilter>
  );
}

export default Filter;
