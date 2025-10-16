import './App.css';
import { LogoAndTitle } from '@components/LogoAndTitle/LogoAndTitle';
import { ActionBar } from '@components/ActionBar/ActionBar';

function App() {
  return (
    <div>
      <LogoAndTitle title='Texto aqui' />
      <ActionBar />
    </div>
  );
}

export default App;
