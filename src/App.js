import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import OrderPage from './pages/OrderPage';
import Home from "./pages/Home";
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/:id' element={<OrderPage/>}/>
        </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
