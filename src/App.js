import logo from './logo.svg';
import './App.css';
import AuthForm from './components/AuthForm';
import Welcome from './components/pages/Welcome';
import {Routes,Route } from "react-router-dom";
import Nbar from './components/pages/Nbar';
function App() {
  return (
 <>
        <Nbar/>
  <Routes>
      <Route  exact path="/welcome" element={<Welcome/>}/>
      <Route  exact path="/auth" element={<AuthForm/>}/>
    
    </Routes>

 </>
  );
}

export default App;
