import { styled, css } from "styled-components";

const Paragraph = styled.p`
  color: var(--cl-list-text);
  width: 80%;
  font-size: 1.4rem;

  ${(props) =>
    props.$type === "clear" &&
    css`
      color: var(--cl-clear);
      text-align: ${(props) => (props.$align === "right" ? "right" : "left")};
      cursor: pointer;
      &:hover {
        color: var(--cl-list-text);
      }
    `}

  ${(props) =>
    props.$type === "filter" &&
    css`
      color: var(--cl-categories);
      font-size: 1.6rem;
      font-weight: 700;
      cursor: pointer;

      @media (min-width: 1024px) {
        font-size: 1.4rem;
      }

      &:hover {
        color: var(--cl-list-text);
      }
    `}

  ${(props) =>
    props.$type === "drag" &&
    css`
      color: var(--cl-categories);
      text-align: center;
    `}

  ${(props) =>
    props.$clicked &&
    css`
      color: var(--cl-bright-blue);
    `}

  ${(props) =>
    props.$completed &&
    css`
      color: var(--cl-checked);
      text-decoration: line-through;
    `}
`;

export default Paragraph;
