import { useCharactersProvider } from "../../hooks/useCharactersProvider";
import styles from "./Searcher.module.css";

const Searcher = () => {
  const { setSearchValue } = useCharactersProvider();

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.containerSearcher}>
      <form className={styles.form}>
        <label htmlFor="search" className={styles.labelSearch}>
          Busca tú personaje
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className={styles.inputSearch}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Searcher;
