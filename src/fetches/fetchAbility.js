const fetchAbility = ({ queryKey }) => {
  const [, url] = queryKey;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default fetchAbility;
