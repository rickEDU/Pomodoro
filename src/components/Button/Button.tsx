import '@styles/global.css';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <div className={styles.container}>{props.children}</div>;
};
