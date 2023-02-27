import { useQuery } from "@tanstack/react-query";
import fetchAbility from "../../fetches/fetchAbility";

const Abilities = ({ url, name, is_hidden }) => {
  const results = useQuery(["Ability", url], fetchAbility);
  if (results.isLoading) {
    return <div>Loading ....</div>;
  }
  const { effect_entries } = results.data;
  const [, { effect }] = effect_entries;

  return (
    <>
      <div className="title">
        {name} {is_hidden ? "Hidden" : "Normal"}
      </div>
      <div className="definition">{effect}</div>
    </>
  );
};

export default Abilities;
