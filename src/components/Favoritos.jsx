import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

const Favoritos = () => {
  const { data, setData } = useContext(CounterContext);
  return (
    <div className="gallery grid-columns-5 p-3">
      {data
        .filter((foto) => {
          return foto.liked;
        })
        .map((photo, i) => {
          return (
            <div
              className="photo"
              key={photo.id}
              style={{ backgroundImage: `url(${photo.src.small})` }}
            ></div>
          );
        })}
    </div>
  );
};

export default Favoritos;
