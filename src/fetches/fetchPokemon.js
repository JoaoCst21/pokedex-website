const fetchPokemon = async ({ queryKey }) => {
  const [, url] = queryKey;
  const response = await fetch(`${url}`);
  const { results, next } = await response.json();
  const promises = results.map((pok) => fetch(pok.url));
  const responses = await Promise.all(promises);
  return [await Promise.all(responses.map((res) => res.json())), next];
};
export default fetchPokemon;
