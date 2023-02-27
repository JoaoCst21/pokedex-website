const fetchPokemon = ({ queryKey: [, id] }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export default fetchPokemon;
