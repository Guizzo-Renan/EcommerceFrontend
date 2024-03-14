//import logo from './logo.svg';
//import './App.css';
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Categoria from './pages/home/CadTeste'

import Home from './pages/home/index'

//import Teste from './pages/home/teste.jsx'
import ItemDetail from "./pages/itemDetail";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./pages/global/Navbar";
import CartMenu from "./pages/global/CartMenu";
import Teste from "./pages/home/teste";



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  return null;
}







function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Navbar/>

      <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Teste />}/>
            <Route path="/item/:itemId" element={<ItemDetail />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/items/:categoria" element={<Categoria />}/>
          </Routes>
         
        
      {/*
      
      Categoria
      
      <Home /> 
      
      /:categotia
      */}
        <CartMenu/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;


/*
 
    <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:itemId" element={<ItemDetail />}/>
            <Route path="/checkout" element={<Checkout />}/>
        
          </Routes>
        </ScrollToTop>
      </BrowserRouter>




  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
*/

   {/** <Route path="/success" element={<Confirmation />}/>*/} 