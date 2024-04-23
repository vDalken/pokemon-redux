import api from "..";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPokemon = (pokemon : any) => {
  return api.get(`/pokemon/${pokemon}`);
};

