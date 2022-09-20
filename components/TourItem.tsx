import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/TourItem.module.scss';

import { getDateFromTimestamp } from '../utils/date';

import { CLOUDFRONT_URL } from '../constants';

import { Tour } from '../types';

type Props = {
  tour: Tour;
};

const TourItem: FC<Props> = ({ tour }) => {
  const imageSource = `${CLOUDFRONT_URL}/${tour.startingPoint.previewUrl}`;

  return (
    <div className={styles['tour-item']}>
      <div className={styles['tour-item__image']}>
        <Image
          src={imageSource}
          alt="Owner tour preview"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles['tour-item__image-overlay']}>
          <span>{tour.sphereCount || 0} spheres</span>
        </div>
      </div>
      <div className={styles['tour-item__info']}>
        <div className={styles['tour-item__info--left']}>
          {getDateFromTimestamp(tour.createdAt)}
        </div>
        <div className={styles['tour-item__info--right']}>
          <div className="avatar"></div>
          <Link href={`${tour.user.nickname}/user-tours`}>
            {tour.user.nickname}
          </Link>
        </div>
      </div>
      <div className={styles['tour-item__headline']}>{tour.title}</div>
    </div>
  );
};

export default TourItem;
