import './App.css';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <h1>Heelo React</h1>
      <NavBar/>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
