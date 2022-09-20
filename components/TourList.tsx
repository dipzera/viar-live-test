import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import TourItem from './TourItem';
import Pagination from './Pagination';

import styles from '../styles/TourList.module.scss';

import { Tour } from '../types';

type Props = {
  tours?: Tour[];
  totalPages: number;
  title?: string;
};

const TourList: FC<Props> = ({ tours, totalPages, title }) => {
  const router = useRouter();
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    if (router.query.page) {
      setPageCount(parseInt(router.query.page as string));
    }
  }, [router.query.page, setPageCount]);

  const handlePaginationChange = (value: number) => {
    setPageCount(value);
    router.push(
      `${router.asPath.replace(/\?page=[0-9]/, '')}?page=${value}`,
      undefined,
    );
  };
  return (
    <div>
      <div className={`${styles.tours} container`}>
        {title && <h2 className={styles['tours-title']}>{title}</h2>}
        <div className={styles['tours-list']}>
          {tours?.map((tour) => (
            <TourItem key={tour.id} tour={tour} />
          ))}
        </div>
        <Pagination
          page={pageCount}
          totalPages={totalPages}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default TourList;
