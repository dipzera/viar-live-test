import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

import styles from '../styles/Header.module.scss';
import Button from './Button';
import { FC } from 'react';
import Avatar from './Avatar';

const dropdownItems = [
  {
    title: 'My Tours',
    link: '/my-tours'
  },
  {
    title: 'My VR Photos',
    link: '/vr-photos',
  },
  { 
    title: 'My VR Events',
    link: '/vr-events',
  }, 
  {
    title: 'Collaborations',
    link: '/collaborations'
  },
  {
    title: 'Settings',
    link: '/settings'
  },
  {
    title: 'Logout',
    link: '/api/'
  }
]

type Props = {
  isDark?: boolean;
};

const Header: FC<Props> = ({ isDark = false }) => {
  const { user, isLoading } = useUser();

  const applyThemeStyles = (prop: string) =>
    isDark ? styles[prop] : `${styles[prop]} ${styles.light}`;

  return (
    <div className={applyThemeStyles('header-wrapper')}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles['nav-logo']}>
            <Link href="/">
              <Image
                src={isDark ? '/images/logo-white.png' : '/images/logo.png'}
                width={204}
                height={56}
                alt={'Viar live logo'}
              />
            </Link>
          </div>
          <div className={styles['nav-actions']}>
            <ul className={styles['nav-actions__list']}>
              <li>
                <Link href={'/tours/'}>
                  <span className={applyThemeStyles('link')}>Explore</span>
                </Link>
              </li>
              <li>
                <a
                  className={applyThemeStyles('link')}
                  href="https://www.wix.com/app-market/virtual-tours"
                >
                  Wix plugin
                </a>
              </li>
            </ul>

            {!user && (
              <div className={styles['nav-actions__buttons']}>
                <Link href="/api/auth/login">
                  <Button>Login</Button>
                </Link>

                <Link href="/api/auth/signup">
                  <Button>Signup</Button>
                </Link>
              </div>
            )}
            {user && (
              <div className={styles['nav-actions__buttons']}>
                <Button className="upload-button">Upload</Button>
                <Avatar picture={user.picture} />
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};
export default Header;
