import { HouseIcon, TimerResetIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { Button } from '@components/Button/Button';
import styles from './ActionBar.module.css';

export const ActionBar = () => (
  <nav className={styles.container}>
    <Button>
      <HouseIcon size={34} />
    </Button>

    <Button>
      <TimerResetIcon size={34} />
    </Button>

    <Button>
      <SettingsIcon size={34} />
    </Button>

    <Button>
      <SunIcon size={34} />
    </Button>
  </nav>
);
