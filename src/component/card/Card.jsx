import styles from "./Card.module.css";

const Card = ({ result }) => {
  const { name, thumbnail } = result;
  const path = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className={styles.containerCard}>
      <img className={styles.img} src={path} alt={name} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Card;
