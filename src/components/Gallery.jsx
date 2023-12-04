import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { data, setData } = useContext(CounterContext);

  const fotoSeleccionada = (idFoto) => {
    // console.log(idFoto);
    const cambiarColor = data.map((imagen) => {
      if (idFoto == imagen.id)
        imagen.liked = imagen.liked == true ? false : true;
      return imagen;
    });
    setData(cambiarColor);
  };
  return (
    <div className="gallery grid-columns-5 p-3">
      {data.map((photo, i) => {
        return (
          <div
            className="photo"
            key={photo.id}
            style={{ backgroundImage: `url(${photo.src.small})` }}
          >
            <div style={{ width: "100%", textAlign: "right" }}>
              <span
                onClick={() => {
                  fotoSeleccionada(photo.id);
                }}
              >
                <IconHeart filled={photo.liked} />
              </span>
            </div>
            <p className="textImg">{photo.alt}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
