import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalState';
import "bootstrap/dist/css/bootstrap.min.css";
import {EditUser} from './componets/EditUser';
import {AddUser} from './componets/AddUser';
import {Home} from './componets/Home';
import Login from './Login/Login';
import React from 'react';

const App = () => {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Routes>
          <Route exact path='/' element={<Login/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route path='/add' element={<AddUser/>}/>
            <Route path='/edit/:id' element={<EditUser/>}/>
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App