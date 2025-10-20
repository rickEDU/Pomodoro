import '@styles/global.css';
import styles from './InputDefault.module.css';

interface InputDefaultProps extends React.ComponentProps<'input'> {
  id: string;
}

export const InputDefault = ({ type, placeholder }: InputDefaultProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};
