import styles from './CyclesPoint.module.css';

interface CyclePointProps {
  color?: string;
}

export const CyclesPoint = ({ color }: CyclePointProps) => {
  const backgroundColor = {
    backgroundColor: color ?? 'grey',
  };

  return <div className={styles.point} style={backgroundColor}></div>;
};
