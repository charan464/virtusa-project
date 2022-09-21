import logo from './logo.svg';
///import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Details  from './components/Details';
import Letter  from './components/Documents';
import DocsVerify from './components/OfferLetter';
import ServiceBond from './components/ServiceBond';
import BankDetails from './components/BankDetails/BankDetails';
import Training from './components/Training';
import Policy from './components/Policies/Policy';
import Documents from './components/Documents'

import Login from './components/Login'
import Navbar from './components/Navbar';
import OfferLetter from './components/OfferLetter';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
    <Routes>
    <Route path='/' exact  element={<Login/>}> </Route>
    <Route path='/home' exact  element={<Home/>}> </Route>
      <Route path='/details' element={<Details/>}> </Route>
      <Route path='/documents' element={<Documents/>}> </Route>
      <Route path='/offer' element={<OfferLetter/>}> </Route>
      <Route path='/service' element={<ServiceBond/>}> </Route>
      <Route path='/policy' element={<Policy/>}> </Route>
      <Route path='/bank' element={<BankDetails/>}> </Route>
      <Route path='/training' element={<Training/>}> </Route>
      </Routes>


      
      </BrowserRouter>
    </div>
  );
}

export default App;
