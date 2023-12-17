import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Routes,Route } from "react-router-dom";
import Welcome from './components/Welcome';
import Nbar from './components/Nbar';
import Email from './components/Email';
function App() {
  return (
 <>
   <Nbar/>
    <Routes>
      <Route  exact path="/email" element={<Email/>}/>
      <Route  exact path="/signup" element={<SignUp/>}/>
      <Route  exact path="/login" element={<Login/>}/>
     
    </Routes>
   

   

 </>
  );
}

export default App;
