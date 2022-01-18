import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer greetings={"Bienvenidos a la PokeTienda favorita de los mejores entrenadores"}/>
      <Footer/>
    </div>
  );
}

export default App;
