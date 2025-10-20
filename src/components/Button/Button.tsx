import '@styles/global.css';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  handleOnClick: () => void;
  customStyle?: React.CSSProperties;
}

export const Button = ({
  children,
  handleOnClick,
  customStyle,
}: ButtonProps) => {
  return (
    <button
      className={styles.container}
      style={customStyle}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
