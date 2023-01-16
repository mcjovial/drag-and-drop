import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

// // // example snapshot
// // Draggable
// const droppableSnapshot = {
//   isDraggingOver: true,
//   draggingOverWith: 'task-1',
// };

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver? 'skyblue': 'white')};
`;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
