import {Routes, Route, useNavigate} from "react-router-dom";
import './App.css';
import BLR_MAA from "./BLR_MAA";

import MainPage from './mainpage';
import MainPage2 from './mainpage_after';
import Payment_Gateway from './payment_gateway';
import Confirmation_page from './confirm';
import Login from './login';
import Signup from './signup';
import About_us from './about_us';

function App() {
  const navigate= useNavigate();
  function Navigator(position){
    navigate(position)
  }
  return (
    <Routes>
      <Route exact path="/" element={<MainPage navigateToPage={Navigator}/>}></Route>
      <Route exact path="/mainpage_after" element={<MainPage2 navigateToPage={Navigator}/>}></Route>

      <Route exact path="/BLR_MAA" element={<BLR_MAA navigateToPage={Navigator}/>}></Route> 
      <Route exact path="/payment_gateway" element={<Payment_Gateway navigateToPage={Navigator}/>}></Route> 
      <Route exact path="/Confirmation_page" element={<Confirmation_page navigateToPage={Navigator}/>}></Route> 
      <Route exact path="/login" element={<Login navigateToPage={Navigator}/>}></Route> 
      <Route exact path="/signup" element={<Signup navigateToPage={Navigator}/>}></Route> 
      <Route exact path="/about_us" element={<About_us navigateToPage={Navigator}/>}></Route> 

    </Routes>

  );
}

export default App;
