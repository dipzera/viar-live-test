import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Header from './Header';

import styles from '../styles/UserLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const UserLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const user = router.query.user;

  const resolveClassName = (path: string) =>
    router.pathname === `/[user]/${path}` ? 'active' : '';

  const shareURL = encodeURIComponent(router.basePath);
  const title = `Viar.live  | ${encodeURIComponent(user as string)}`;
  const source = 'Viar_Live';

  return (
    <div className="user-layout">
      <Header />
      <div className={styles['user-layout__cover']}>
        <div className={`container ${styles['nickname-container']}`}>
          <div className={styles['user-data']}>
            <div className={styles['user-name']}>{user || 'No user name'}</div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={`container ${styles.items}`}>
          <ul className={styles['navbar--left']}>
            <li className={styles[resolveClassName('about')]}>
              <Link href={`/${router.query.user}/about`}>About</Link>
            </li>
            <li className={styles[resolveClassName('user-tours')]}>
              <Link href={`/${router.query.user}/user-tours`}>Tours</Link>
            </li>
          </ul>
          <ul className={styles['navbar--right']}>
            <span>Share:</span>
            <ul className={styles['navbar--right__list']}>
              <li>
                <Link
                  href={`http://www.facebook.com/sharer/sharer.php?u=${shareURL}&t=${title}`}
                  target="_blank"
                >
                  <Image
                    src={'/images/facebook.png'}
                    width={13}
                    height={20}
                    alt="Facebook logo"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`http://www.twitter.com/intent/tweet?url=${shareURL}&via=${source}&text=${title}`}
                  target="_blank"
                >
                  <Image
                    src={'/images/twitter.png'}
                    width={18}
                    height={15}
                    alt="Facebook logo"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`http://plus.google.com/share?url=${shareURL}`}
                  target="_blank"
                >
                  <Image
                    src={'/images/google.png'}
                    width={25}
                    height={15}
                    alt="Facebook logo"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={`http://www.linkedin.com/shareArticle?mini=true&url=${shareURL}&title=${title}&source=${source}`}
                >
                  <Image
                    src={'/images/linkedin.png'}
                    width={18}
                    height={18}
                    alt="Facebook logo"
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default UserLayout;
