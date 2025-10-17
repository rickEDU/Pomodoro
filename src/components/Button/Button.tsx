import '@styles/global.css';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}

export const Button = ({ children, customStyle }: ButtonProps) => {
  return (
    <div className={styles.container} style={customStyle}>
      {children}
    </div>
  );
};
