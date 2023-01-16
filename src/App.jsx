import React, { useState } from 'react';
import Column from './Column';
import initialData from './initial-data';

export const App = () => {
  const [data, setData] = useState(initialData);

  return data.columnOrder.map((columnId) => {
    const column = data.columns[columnId];
    const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};
