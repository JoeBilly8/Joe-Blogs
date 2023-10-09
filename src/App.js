import './App.css';
import Navbar from './navbar';
import Home from './home';

function App() {

  const title = 'Welcome to my shitty blog';
  const likes = 50;
  const person = { name: 'pisspants', age: 1 };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
