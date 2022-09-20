import { FC } from 'react';
import Image from 'next/image';

import styles from '../styles/Avatar.module.scss';

type Props = {
  picture?: string | null;
};
const Avatar: FC<Props> = ({ picture }) => {
  return (
    <div className="avatar__container">
      <Image
        className={styles.avatar}
        // TODO: Use fallback
        src={picture!}
        width={40}
        height={40}
        alt="User avatar"
      />
    </div>
  );
};

export default Avatar;
