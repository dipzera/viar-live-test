import { useUser } from '@auth0/nextjs-auth0';

import Button from './Button';

import styles from '../styles/Main.module.scss';

const Main = () => {
  const { user, isLoading } = useUser();
  return (
    <main className={styles['main']}>
      <div className={styles['main-description']}>
        <h1 className={styles['main-description__headline']}>
          Share Your Spaces in Virtual Reality
        </h1>
        <p className={styles['main-description__text']}>
          The easiest way to create and share 360˚ virtual reality tours.
        </p>
        {!user && (
          <div className={styles['main-description__footer']}>
            <a href="/api/auth/login">
              <Button className="main-description__button">Enter</Button>
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
