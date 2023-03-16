import React from 'react';

const TodoInput = ({ newTarea, addTarea, setNewTarea }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTarea();
    setNewTarea('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="texto">Ingrese Tarea:</label>
      <input
        type="text"
        id="texto"
        value={newTarea}
        onChange={(e) => setNewTarea(e.target.value)}
        placeholder="Ingrese Tarea"
        required
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TodoInput;
