import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Userdash from './components/Userdash';
import AdminDash from './components/AdminDash'


import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user' element={<Userdash/>}/>
        <Route path='/Admin' element={<AdminDash/>}/>


      </Routes>
    </div>
  );
}

export default App;
