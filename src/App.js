import logo from './logo.svg';
import './App.css';
import { AppContext } from "./context";
import { Header } from './components/Header';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Ceo } from './components/Ceo';
import { Manager } from './components/Manager';
import { Director } from './components/Director';
import { ContactUs } from './components/ContactUs';
import { LoginComponent } from './components/LoginComponent';

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
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/contactus/ceo' element={<Ceo/>}></Route>
        <Route path='/contactus/manager' element={<Manager/>}></Route>
        <Route path='/contactus/director/:id' element={<Director/>}></Route>
        <Route path='/login' element={<LoginComponent/>}></Route>
        
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
