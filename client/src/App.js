import  React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Home/Navbar';
import SignUp from './components/Login/SignUp';
import Show from './components/Show/Show';
import Main from './components/Main/Main';
import './App.css';

import Footer from './components/Footer/Footer';

function App({store}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/login' element={<Login store={store} handleLogin={handleLogin} /> }/>
        <Route path='/show' element={<Show />}/>
        <Route path='/main' element={<Main/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
