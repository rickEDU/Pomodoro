import { House, TimerReset, Settings, Sun } from 'lucide-react';
import { Button } from '@components/Button/Button';
import styles from './ActionBar.module.css';

export const ActionBar = () => (
  <div className={styles.container}>
    <Button>
      <House />
    </Button>

    <Button>
      <TimerReset />
    </Button>

    <Button>
      <Settings />
    </Button>

    <Button>
      <Sun />
    </Button>
  </div>
);
