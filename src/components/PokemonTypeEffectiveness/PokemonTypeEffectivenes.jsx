import { useQuery } from "@tanstack/react-query";
import fetchTypeEffectiveness from "../../fetches/fetchTypeEffectiveness";
import "./pokemonTypeEffectiveness.css";

const damage = {
  double_damage_from: 2,
  double_damage_to: -2,
  half_damage_from: 1 / 2,
  half_damage_to: -1 / 2,
  no_damage_from: 0,
  no_damage_to: -0,
};

const PokemonTypeEffectivenes = ({ url }) => {
  const results = useQuery(["pokemon", url], fetchTypeEffectiveness);
  if (results.isLoading) {
    return <div>Loading</div>;
  }

  const { damage_relations } = results.data;
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
  } = damage_relations;
  const map = {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
  };
  return (
    <>
      {Object.entries(map).length
        ? Object.entries(map).map(([key, value]) => {
            return (
              <div className={`${key} damage`} key={key}>
                {value.length ? key.replaceAll("_", " ") : null}
                <div className="types" key={`${key}-types`}>
                  {value.length
                    ? value.map(({ name }) => (
                        <div className={name} key={name}>
                          {name}
                        </div>
                      ))
                    : null}
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};
export default PokemonTypeEffectivenes;
