import '@styles/global.css';
import styles from './Title.module.css';
import { AlarmClock } from 'lucide-react';

interface TitleProps {
  title: string;
}

export function Title(props: TitleProps) {
  return (
    <div className={styles.conteiner}>
      <AlarmClock className={styles.icon} />
      <h1 className={styles.font}>{props.title}</h1>
    </div>
  );
}
