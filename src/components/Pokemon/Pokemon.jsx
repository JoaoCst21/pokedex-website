import "./Pokemon.css";
import { Link } from "react-router-dom";

const Pokemon = ({ abilities, name, id, types, img }) => {
  return (
    <div className="pokemon-component">
      <Link to={`/pokemon/${id}`}>
        <img
          loading="lazy"
          // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
          src={img}
          alt={name}
          className="pokemon-image"
        />
      </Link>
      <div className="pokemon-information">
        <div className="pokemon-name-number">
          <span>{name}</span>
          <span className="number">{id}</span>
        </div>
        <div className="pokemon-type">
          <span>Tipos</span>
          <span className={types.replace(" / ", "-")}>{types}</span>
        </div>
        <div className="pokemon-abilities">
          <span>Habilidades</span>
          <span>{abilities}</span>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
