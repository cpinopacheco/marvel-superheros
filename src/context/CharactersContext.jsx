import { createContext, useEffect, useState } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getCharacters();
  }, [offset]);

  useEffect(() => {
    getCharacterByName(searchValue);
  }, [searchValue]);

  const getCharacters = async () => {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f8750280431a7ce4afeb0f45253fd4&hash=aaca0d59a344b878a020191929de0fb5&offset=${offset}`;

    try {
      const res = await fetch(url);

      if (!res.status === 200) throw new Error("Ha ocurrido un error");

      const results = await res.json();

      setFetchData(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getCharacterByName = async (searchValue) => {
    let url = "";

    if (searchValue === "") {
      url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f8750280431a7ce4afeb0f45253fd4&hash=aaca0d59a344b878a020191929de0fb5&offset=${offset}`;
    } else {
      url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchValue}&ts=1&apikey=23f8750280431a7ce4afeb0f45253fd4&hash=aaca0d59a344b878a020191929de0fb5`;
    }

    try {
      const res = await fetch(url);

      if (!res.status === 200) throw new Error("Ha ocurrido un error");

      const result = await res.json();

      setFetchData(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const data = { fetchData, offset, setOffset, setSearchValue };

  return (
    <CharactersContext.Provider value={data}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersProvider };

export default CharactersContext;
