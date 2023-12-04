import Favoritos from "../components/Favoritos";

function Favorites() {
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4"></div>
      <Favoritos />
    </div>
  );
}
export default Favorites;
