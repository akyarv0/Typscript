import React from 'react'
import { Grid, Typography } from '@mui/material'

import TodoListItem from './TodoListItem'



interface ITodoList {
  todos: ITodoType[]
}


const TodoList: React.FC<ITodoList> = ({ todos }) => {
  const progressTodos = todos.filter((todo) =>!todo.isDone);
  const completedTodos = todos.filter((todo) => !todo.isDone);




  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        mt: 1,
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        m={6}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "1rem",
        }}
      ><Typography> In Progress Todos</Typography>
      
        <TodoListItem />
      </Grid>
    </Grid>

  )
}

export default TodoList