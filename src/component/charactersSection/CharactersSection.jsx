import { useCharactersProvider } from "../../hooks/useCharactersProvider";
import Card from "../card/Card";
import styles from "./CharactersSection.module.css";
import waveBottom from "../../assets/wave-bottom.svg";
import waveTop from "../../assets/wave-top.svg";

const CharactersSection = () => {
  const { fetchData } = useCharactersProvider();

  return (
    <section>
      <img src={waveTop} alt="" />
      <div className={styles.containerCharacters}>
        {fetchData.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          fetchData.map((character) => (
            <Card key={character.id} result={character} />
          ))
        )}
      </div>
      <img src={waveBottom} alt="" />
    </section>
  );
};

export default CharactersSection;
