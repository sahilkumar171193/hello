//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/navbar';
import { Home } from './Components/home';
import { Contact } from './Components/contact';
import { About } from './Components/about';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
        <Route path='/aboutUs' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
