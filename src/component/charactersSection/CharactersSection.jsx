import { useCharactersProvider } from "../../hooks/useCharactersProvider";
import Card from "../card/Card";
import styles from "./CharactersSection.module.css";
import waveBottom from "../../assets/wave-bottom.svg";
import waveTop from "../../assets/wave-top.svg";
import Pagination from "../pagination/Pagination";

const CharactersSection = () => {
  const { fetchData } = useCharactersProvider();

  return (
    <section id="section-test">
      <img src={waveTop} alt="wave-top" />
      <div className={styles.containerCharacters}>
        {fetchData.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          fetchData.map((character) => (
            <Card key={character.id} result={character} />
          ))
        )}
      </div>
      <Pagination />
      <img src={waveBottom} alt="wave-bottom" />
    </section>
  );
};

export default CharactersSection;
