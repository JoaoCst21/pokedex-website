import { useQueries, useQuery } from "@tanstack/react-query";

const fetchPokemons = async ({ queryKey }) => {
  const [, url] = queryKey;
  const { results, next } = await fetch(`${url}`).then((res) => res.json());
  const responses = results.map((pok) =>
    fetch(pok.url).then((res) => res.json())
  );
  return [await Promise.all(responses), next];
};
export default fetchPokemons;
