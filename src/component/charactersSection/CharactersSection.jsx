import { useCharactersProvider } from "../../hooks/useCharactersProvider";
import Card from "../card/Card";
import styles from "./CharactersSection.module.css";
import waveBottom from "../../assets/wave-bottom.svg";
import waveTop from "../../assets/wave-top.svg";
import Pagination from "../pagination/Pagination";
import Searcher from "../searcher/Searcher";

const CharactersSection = () => {
  const { fetchData } = useCharactersProvider();

  return (
    <section
      id="containerCharactersSection"
      className={styles.containerCharactersSection}
    >
      <Searcher />
      <img src={waveTop} alt="wave-top" />
      <div className={styles.mainContainer}>
        <div className={styles.containerCharacters}>
          {fetchData.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            fetchData.map((character) => (
              <Card key={character.id} result={character} />
            ))
          )}
        </div>
      </div>
      <Pagination />
      <img src={waveBottom} alt="wave-bottom" />
    </section>
  );
};

export default CharactersSection;
