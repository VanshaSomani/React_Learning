import logo from './logo.svg';
import './App.css';
import { AppContext } from "./context";
import { Header } from './components/Header';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';

function App() {
  var title = "Royal technosoft";
  var addresss = "Ahmedabad";
  axios.defaults.baseURL = "https://node5.onrender.com";
  return (
    <div className="App">
      <Header headertitle={title}/>
      <AppContext.Provider>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
