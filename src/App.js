import logo from './logo.svg';
import './App.css';
import  Header from './Header.js';
import SearchBar from './SearchBar.js';
import SearchResultsList from './SearchResultsList.js';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResultsList />
    </div>
  );
}

export default App;
