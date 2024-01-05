import { styled, css } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Img from "../ui/Img";

const StyledListComp = styled(Flex)`
  background: var(--cl-comp);
  padding: 1.5rem 2rem;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid var(--cl-crossed-item);

  &:hover {
    .del-icon {
      display: block;
    }
  }

  ${(props) =>
    props.$filter === "Active" &&
    props.$isCompleted &&
    css`
      display: none;
    `}

  ${(props) =>
    props.$filter === "Completed" &&
    props.$isActive &&
    css`
      display: none;
    `}
`;

const StyledTextCon = styled(Flex)`
  gap: 1.5rem;
  flex-direction: row;
  width: 90%;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  border: 1px solid var(--cl-crossed-item);
  position: relative;
  /* overflow: hidden; */
  cursor: pointer;
  background: ${(props) =>
    props.$completed
      ? 'url("icon-check.svg") no-repeat center, var(--check-background)'
      : "transparent"};

  &:hover::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 0.5px;
    background: var(--check-border);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const StyledDelCon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  display: none;
`;

function ListComp({
  todo,
  handleDelClick,
  handleCompClick,
  provided,
  isCompleted,
  isActive,
  filter,
}) {
  const { id, task, completed } = todo;
  return (
    <StyledListComp
      as="li"
      ref={provided ? provided.innerRef : null}
      {...(provided ? provided.draggableProps : {})}
      {...(provided ? provided.dragHandleProps : {})}
      $isCompleted={isCompleted}
      $isActive={isActive}
      $filter={filter}
    >
      <StyledTextCon>
        <StyledCircle
          onClick={() => handleCompClick(todo)}
          $completed={completed}
        />
        <Paragraph $completed={completed}>{task}</Paragraph>
      </StyledTextCon>
      <StyledDelCon className="del-icon" onClick={() => handleDelClick(id)}>
        <Img
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          d={
            "M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          }
          fillRule="evenodd"
          fill="#494C6B"
        />
      </StyledDelCon>
    </StyledListComp>
  );
}

export default ListComp;
