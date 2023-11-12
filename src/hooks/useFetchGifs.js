import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Obtener imágenes de la categoría, de forma asíncrona
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return {
    images,
  };
};
