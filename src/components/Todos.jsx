import { styled } from "styled-components";
import ListComp from "./ListComp";
import Flex from "../ui/Flex";
import { useTodo } from "../context/TodoContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const StyledTodos = styled(Flex)`
  width: 100%;
  /* gap: 0.5rem; */
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 37px 62px -25px var(--cl-shadow);
  -webkit-box-shadow: 2px 37px 62px -25px var(--cl-shadow);
  -moz-box-shadow: 2px 37px 62px -25px var(--cl-shadow);
  z-index: 9999;
  background: var(--cl-bg-main);

  @media (min-width: 1024px) {
    box-shadow: 0px 14px 28px -12px var(--cl-shadow);
    -webkit-box-shadow: 0px 14px 28px -12px var(--cl-shadow);
    -moz-box-shadow: 0px 14px 28px -12px var(--cl-shadow);
  }

  /* & > *:not(:last-child) {
    border-bottom: 1px solid var(--cl-crossed-item);
  } */
`;

function Todos() {
  const { todoList, deleteTodoItem, handleCompleted, handleDragNDrop, filter } =
    useTodo();

  return (
    <DragDropContext onDragEnd={handleDragNDrop}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <StyledTodos
            as="ul"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoList.map((todo, index) => (
              <Draggable draggableId={todo.id} key={todo.id} index={index}>
                {(provided) => (
                  <ListComp
                    provided={provided}
                    todo={todo}
                    key={todo.id}
                    handleDelClick={deleteTodoItem}
                    handleCompClick={handleCompleted}
                    isCompleted={todo.completed}
                    isActive={!todo.completed}
                    filter={filter}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </StyledTodos>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Todos;
