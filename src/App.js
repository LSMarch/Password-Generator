import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Generator from './features/Generator';
import acceptedCharacters from './utils';

function App() {
  return (
    <div className="App">
      <Header />
      <Generator approvedCharacters={acceptedCharacters} />
      <Footer />
    </div>
  );
}

export default App;
