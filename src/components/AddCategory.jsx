import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Si la búsqueda tiene menos de un caracter...
    if (inputValue.trim().length <= 1) return;

    // Añadir búsqueda al array de categorías
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        id="valor_busqueda"
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  );
};
