import React from 'react'

const TodoItem = ({tarea, deleteTarea}) => {


    
  return (
    <div>
      <li key={tarea.id}>
        {tarea}
      <button onClick={() => deleteTarea(tarea.id)}>Borrar</button>
      </li>
    
    </div>
  )
}

export default TodoItem
