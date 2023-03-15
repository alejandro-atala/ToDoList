import React from 'react'

const TodoInput = ({ newTarea, addTarea, setNewTarea }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addTarea();

    const inputDOM = document.getElementById('texto');
    inputDOM.value = '';
    setNewTarea('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(e) => setNewTarea(e.target.value)}
        newTarea={newTarea}
        id="texto"
        placeholder='Ingrese Tarea' />

      <button type='submit'>Agregar Tarea</button>
    </form>
  )
}

export default TodoInput
