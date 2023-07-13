import './App.css';
import Header from './components/Header';
import Generator from './features/Generator';
import acceptedCharacters from './utils';

function App() {
  return (
    <div className="App">
      <Header />
      <Generator approvedCharacters={acceptedCharacters} />
    </div>
  );
}

export default App;
