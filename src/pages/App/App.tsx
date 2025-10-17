import styles from './App.module.css';
import { LogoAndTitle } from '@components/LogoAndTitle/LogoAndTitle';
import { ActionBar } from '@components/ActionBar/ActionBar';
import { Section } from '@components/Section/Section';
import { TimeDisplay } from '@components/TimeDisplay/TimeDisplay';
import { TaskDescription } from '@components/TaskDescription/TaskDescription';
import { Cycles } from '@components/Cycles/Cycles';

function App() {
  return (
    <div className={styles.container}>
      <Section>
        <LogoAndTitle title='Pomodoro' />
      </Section>
      <Section>
        <ActionBar />
      </Section>
      <Section>
        <TimeDisplay />
      </Section>
      <Section>
        <TaskDescription />
      </Section>
      <Section>
        <Cycles />
      </Section>
    </div>
  );
}

export default App;
