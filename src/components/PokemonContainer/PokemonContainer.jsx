import { useEffect, useRef, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { useQuery } from "@tanstack/react-query";
import "./pokemonContainer.css";
import fetchPokemon from "../../fetches/fetchPokemon";
import pokemon from "../Pokemon/Pokemon";

const PokemonContainer = () => {
  const refContainer = useRef(null);
  const refObserver = useRef(null);
  const pokemonList = useRef([]);
  const nextRef = useRef(null);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20");

  const results = useQuery(["pokemons", url], fetchPokemon);

  useEffect(() => {
    if (results.isLoading) return;
    if (!refObserver.current) {
      refObserver.current = new IntersectionObserver(([entry]) => {
        console.log(entry);
        if (entry.isIntersecting) {
          console.log("intersecting", next);
          setUrl(() => nextRef.current);
        }
      });
      refObserver.current.observe(refContainer.current);
    }
  });

  const markup = (
    <>
      <div className="pokemon-container">
        {pokemonList.current.length
          ? pokemonList.current.map(
              ({ abilities, name, id, types, sprites }) => {
                const img = sprites.other["official-artwork"]["front_default"];
                return (
                  <Pokemon
                    img={img}
                    id={id}
                    abilities={abilities
                      .map((obj) => obj.ability.name)
                      .join(" / ")}
                    types={types.map((obj) => obj.type.name).join(" / ")}
                    name={name}
                    key={id}
                  ></Pokemon>
                );
              }
            )
          : null}
      </div>
      <div className="visor" ref={refContainer}>
        LOADING...
      </div>
    </>
  );

  if (results.isLoading) {
    return markup;
  }

  const [list, next] = results.data;
  pokemonList.current = [...pokemonList.current, ...list];
  nextRef.current = next;

  return markup;
};
export default PokemonContainer;
