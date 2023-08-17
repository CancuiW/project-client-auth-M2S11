// *************
// Pay attention to the version of react-router-dom.The V5 is different with V6.
// for instance the useHistory is replaced by useNavigate in V6
// *************
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    //<Router>must wrap the whole <div>, in case the link can not change with related page
    <Router>
    <div className="App">
      <h2>FRIENDS DATABASE</h2>

      <Link to='/login' className='link'>LOGIN</Link>
      <Link to='/friends' className='link'>FRIENDLIST</Link>
      <Link to='/friends/add' className='link'>ADDFRIEND</Link>
      <Link to='/logout' className='link'>LOGOUT</Link>

     
       
          <Route path='/' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <PrivateRoute path='/friends'  exact component={FriendList} />
          <PrivateRoute path='/friends/add' exact component={AddFriend} />
          <PrivateRoute path='/logout' exact component={Logout} />

       
      
    </div>
    </Router>
  );
}

export default App;
