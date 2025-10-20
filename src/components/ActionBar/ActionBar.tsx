import { HouseIcon, TimerResetIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { Button } from '@components/Button/Button';
import styles from './ActionBar.module.css';

export const ActionBar = () => {
  const handleHome = () => {
    console.log('Homer');
  };

  const handleReset = () => {
    console.log('Reset');
  };

  const handleSettings = () => {
    console.log('Settings');
  };

  const handleTheme = () => {
    console.log('Theme');
  };

  return (
    <nav className={styles.container}>
      <Button handleOnClick={handleHome}>
        <HouseIcon size={34} />
      </Button>

      <Button handleOnClick={handleReset}>
        <TimerResetIcon size={34} />
      </Button>

      <Button handleOnClick={handleSettings}>
        <SettingsIcon size={34} />
      </Button>

      <Button handleOnClick={handleTheme}>
        <SunIcon size={34} />
      </Button>
    </nav>
  );
};
