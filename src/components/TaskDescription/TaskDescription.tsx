import '@styles/global.css';
import styles from './TaskDescription.module.css';

export const TaskDescription = () => {
  return (
    <div className={styles.content}>
      <p className={styles.task_description}>task:</p>
      <span className={styles.task}>Estudar</span>
      <div className={styles.task_line}></div>
      <p className={styles.timer_description}>
        Neste ciclo <span className={styles.strong}>foque</span> por{' '}
        <span className={styles.strong}>25 min.</span>
      </p>
    </div>
  );
};
