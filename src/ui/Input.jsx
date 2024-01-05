import { styled } from "styled-components";
import Flex from "./Flex";

const StyledInputCon = styled(Flex)`
  background: var(--cl-comp);
  padding: 1.5rem 2rem;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-radius: 5px;

  @media (min-width: 1024px) {
    margin-top: 4rem;
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  border: 1px solid var(--cl-crossed-item);
`;

const StyledInput = styled.input`
  color: var(--cl-list-text);
  outline: none;
  border: none;
  background: var(--cl-comp);
  width: 80%;
  height: 100%;
  font-size: 1.4rem;

  &::placeholder {
    color: var(--cl-input-placeholder);
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

function Input({ handleChange, value, handleKey }) {
  return (
    <StyledInputCon>
      <StyledCircle />
      <StyledInput
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
    </StyledInputCon>
  );
}

export default Input;
