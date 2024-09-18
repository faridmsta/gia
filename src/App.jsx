import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landingpage from './pages/landingpage/Landingpage';
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Signin from './pages/Auth/singnin/Signin';
import Signup from './pages/Auth/signup/Signup';
import SearchCat from './pages/searchcat/SearchCat';
import Clientpage from './pages/clientpage/Clientpage';
import { Toaster } from 'react-hot-toast';
function App() {
  
  const [isfreelance, setIsfreelance] = useState(false);
  const [islogged, setIslogged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Update islogged based on the current path
    if (location.pathname === '/searchcat' || location.pathname === '/profile' || location.pathname === '/home') {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [location.pathname]);

  return (
    <>
      {islogged && <Header />}
      <Toaster />
      <Routes>
        <Route path="/" element={<Landingpage isfreelance={isfreelance} setIsfreelance={setIsfreelance} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup isfreelance={isfreelance} />} />
        <Route path="/searchcat" element={<SearchCat />} />
        <Route path="/profile" element={<Clientpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
