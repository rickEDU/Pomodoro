import { useEffect, useState } from 'react';
import styles from './TimeDisplay.module.css';

interface TimeDisplayProps {
  initialTime: number;
  isStartCoutdown: boolean;
  onFinish?: () => void;
}

export const TimeDisplay = ({
  initialTime = 120,
  isStartCoutdown = false,
  onFinish,
}: TimeDisplayProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0 || !isStartCoutdown) {
      if (onFinish) onFinish();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onFinish, isStartCoutdown]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`;

  return <div className={styles.timer}>{formattedTime}</div>;
};
