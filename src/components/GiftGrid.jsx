import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  const { images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};
