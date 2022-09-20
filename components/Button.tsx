import { FC } from 'react';
import styles from '../styles/Button.module.scss';
import mainStyles from '../styles/Main.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Button: FC<Props> = ({ children, className }) => {
  console.log('%cButton.tsx line:11 className', 'color: #007acc;', className);
  return (
    <button
      className={`${styles.button} ${className ? mainStyles[className] : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
