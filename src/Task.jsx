import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

// // // example snapshot
// // Draggable
// const draggableSnapshot = {
//   isDragging: true,
//   draggingOver: 'column-1',
// };

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
      ? 'lightgreen'
      : 'white'};
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const Task = ({ task, index }) => {
  const isDragDisabled = task.id === 'task-1';

  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
          aria-roledescription="Press spacebar to lift the task"
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
