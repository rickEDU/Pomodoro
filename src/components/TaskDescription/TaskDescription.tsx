import '@styles/global.css';
import styles from './TaskDescription.module.css';
import { InputDefault } from '@components/InputDefault/InputDefault';

export const TaskDescription = () => {
  return (
    <div className={styles.content}>
      <p className={styles.task_description}>task:</p>
      <InputDefault type='text' id='id-input' placeholder='PlaceHolder' />
      <div className={styles.task_line}></div>
      <p className={styles.timer_description}>
        Neste ciclo <span className={styles.strong}>foque</span> por{' '}
        <span className={styles.strong}>25 min.</span>
      </p>
    </div>
  );
};
