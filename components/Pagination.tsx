import { FC } from 'react';
import styles from '../styles/Pagination.module.scss';

type Prop = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination: FC<Prop> = ({ page, totalPages, onChange }) => {
  const isPrevShown = page > 1;
  const paginationCount = `Page ${page || 1} of ${totalPages}`;

  const increasePage = () => onChange(page + 1);
  const decreasePage = () => onChange(page - 1 || 0);

  return (
    <div className={styles.pagination}>
      {isPrevShown && (
        <div className={styles['pagination-prev']} onClick={decreasePage}></div>
      )}
      <div className={styles['pagination-count']}>{paginationCount}</div>
      <div className={styles['pagination-next']} onClick={increasePage}></div>
    </div>
  );
};

export default Pagination;
