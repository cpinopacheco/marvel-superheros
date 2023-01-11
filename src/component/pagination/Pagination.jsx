import { useState } from "react";
import { useCharactersProvider } from "../../hooks/useCharactersProvider";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { offset, setOffset } = useCharactersProvider();

  const previousPage = () => {
    if (offset === 0) return;
    setOffset(offset - 20);
    setPage(page - 1);
  };

  const nextPage = () => {
    setOffset(offset + 20);
    setPage(page + 1);
  };

  return (
    <div className={styles.containerPagination}>
      <a
        href="#containerCharactersSection"
        className={`${styles.paginationButton} ${
          offset === 0 && styles.disabled
        }`}
        onClick={previousPage}
      >
        Anterior
      </a>
      <p className={styles.page}>Página: {page}</p>
      <a
        href="#containerCharactersSection"
        className={styles.paginationButton}
        onClick={nextPage}
      >
        Siguiente
      </a>
    </div>
  );
};

export default Pagination;
