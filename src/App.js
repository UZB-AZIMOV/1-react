import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Servic from "./components/servic/Servic"
import Years from "./components/years/Years"
import Market from "./components/market/Market"
import Sayt from "./components/sayt/Sayt"
import From from "./components/from/From"
import Bag from "./components/bag/Bag"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Servic/>
    <Years/>
    <Market/>
    <Sayt/>
    <From/>
    <Bag/>
    <Footer/>
    </div>
  );
}

export default App;
