import { createContext, useEffect, useState } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState([]);

  const url =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f8750280431a7ce4afeb0f45253fd4&hash=aaca0d59a344b878a020191929de0fb5&offset=40";

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      const res = await fetch(url);

      if (!res.status === 200) throw new Error("Ha ocurrido un error");

      const results = await res.json();

      setFetchData(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const data = { fetchData };

  return (
    <CharactersContext.Provider value={data}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersProvider };

export default CharactersContext;
