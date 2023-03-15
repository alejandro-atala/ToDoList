import React from 'react'
import TodoItem from './TodoItem'

const TodoListItem = ({tareas, deleteTarea,id}) => {


  return (
    <div>
      <ol>
            {tareas.map((tarea) => <TodoItem key = {tarea.id} tarea ={tarea} deleteTarea={deleteTarea} id ={id} />)}
           
      </ol>
    </div>
  )
}

export default TodoListItem
