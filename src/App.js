import './App.css';
import Header from './Components/Header';
import DarkMode from './Components/DarkMode';
import Virtual from './Components/Virtual';
import InPerson from './Components/InPerson';

function App() {
  return (
    <div className='App'>
      <Header />
      <DarkMode />
        <div className='Main'>
        <Virtual />
        <InPerson />
        </div>
    </div>
  );
}

export default App;
