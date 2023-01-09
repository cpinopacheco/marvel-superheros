import { useContext } from "react";
import CharactersContext from "../context/CharactersContext";

export const useCharactersProvider = () => {
  return useContext(CharactersContext);
};
