import styles from './Cycles.module.css';
import { CyclesPoint } from '@components/CyclesPoint/CyclesPoint';

export const Cycles = () => {
  const renderPoints = () => {
    const numberOfPoints = 8;
    const points = Array.from({ length: numberOfPoints });
    return points.map((_, index) => {
      let color = index % 2 === 0 ? 'blue' : 'red';
      if (index === numberOfPoints - 1) color = 'yellow';
      return <CyclesPoint key={index} color={color} />;
    });
  };

  return (
    <div>
      <span className={styles.cycles_text}>Ciclos:</span>
      <div className={styles.content}>{renderPoints()}</div>
    </div>
  );
};
