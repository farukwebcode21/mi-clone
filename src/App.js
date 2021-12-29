import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/PreNavbar/Navbar/Navbar';
import PreNavbar from './components/PreNavbar/PreNavbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <PreNavbar />
       <Navbar/>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
