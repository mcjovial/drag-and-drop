import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import initialData from './initial-data';

export const App = () => {
  const [data, setData] = useState(initialData);
  const onDragEnd = () => {
    // TODO: reorder our column
    return
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })
      }
    </DragDropContext>
  )
};
