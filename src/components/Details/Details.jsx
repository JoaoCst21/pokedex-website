import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPokemon from "../../fetches/fetchPokemon";
import "./details.css";
import PokemonTypeEffectivenes from "../PokemonTypeEffectiveness/PokemonTypeEffectivenes";
import Abilities from "../Abilities/Abilities";
import { useReducer } from "react";
import Stats from "../Stats/Stats";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["pokemon", id], fetchPokemon);
  if (results.isLoading) return <div>Loading...</div>;

  const {
    abilities,
    base_experience,
    forms,
    height,
    moves,
    name,
    sprites,
    stats,
    types,
    weight,
  } = results.data;
  const img = sprites.other["official-artwork"]["front_shiny"];
  // const map = {};
  // stats.forEach(({ stat, base_stat }) => {
  //   map[stat.name] = base_stat;
  // });

  return (
    <>
      <div className="container-pokemon">
        <div className="pokemon">
          <img src={img} alt={name} />
        </div>
        <div className="info">
          <div className="stats">
            {stats.map(({ stat, base_stat }) => {
              return <Stats base_stat={base_stat} name={stat.name} />;
            })}
            <div></div>
          </div>
          <div className="info-pokemon">
            <div className="damage-relation-container">
              {types.map(({ type }) => (
                <PokemonTypeEffectivenes url={type.url} />
              ))}
            </div>
            <div className="abilities">
              {abilities.length
                ? abilities.map(({ ability, is_hidden }) => (
                    <Abilities
                      is_hidden={is_hidden}
                      name={ability.name}
                      url={ability.url}
                      key={ability.name}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
