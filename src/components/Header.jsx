import { styled } from "styled-components";
import { useTodo } from "../context/TodoContext";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  height: 220px;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.$isDarkMode
      ? "url('bg-mobile-dark.jpg') no-repeat top"
      : "url('bg-mobile-light.jpg') no-repeat top"};
  background-size: cover;
  z-index: 1;

  @media (min-width: 1024px) {
    background: ${(props) =>
      props.$isDarkMode
        ? "url('bg-desktop-dark.jpg') no-repeat top"
        : "url('bg-desktop-light.jpg') no-repeat top"};
    background-size: cover;
    height: 270px;
  }
`;

function Header() {
  const { isDarkMode } = useTodo();
  return <StyledHeader $isDarkMode={isDarkMode} />;
}

export default Header;
