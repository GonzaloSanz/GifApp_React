import { useState } from "react";
import { AddCategory, GiftGrid } from './components';

const GifApp = () => {
  const [categories, setCategories] = useState(['The Witcher 3', 'Dragon Ball']);

  const onNewCategory = (newCategory) => {

    // Si la categoría ya existe, no la añade al array
    const existe = categories.find(category => category.toLowerCase() == newCategory.toLowerCase());
    if(existe) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Título */}
      <h1>Gif App</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory={onNewCategory}
      />

      {/* Listado de Gifs */}
      {categories.map((category) => (
        <GiftGrid
          key={category}
          category={category}
        />
      ))}
    </>
  )
}

export default GifApp;