import TodoInput from './componentes/TodoInput'
import TodoListItem from './componentes/TodoListItem';
import React, {useState} from 'react';

function App() {

  const [tareas, setTareas] = useState([]);
  const [newTarea, setNewTarea] = useState('');
  let id = 0
  
  const addTarea = () => {
    setTareas([...tareas, newTarea]);
    id = tareas.length + 1
    console.log(id);
    setNewTarea('');
  
};


const deleteTarea = (id) => {
  setTareas(tareas.filter(tarea => tarea.id !== id));
};


  return (
    
    <div>
      <h1>Lista de Tareas</h1>
      <TodoInput newTarea ={newTarea} addTarea ={addTarea} setNewTarea ={setNewTarea} />
      <TodoListItem tareas ={tareas} deleteTarea={deleteTarea}  />
    </div>
  );
}

export default App;
