import React from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddFriend';




function App() {
  return (
    <div className="App">
      <h2>FRIENDS DATABASE</h2>
      <nav>
        <Link to='/login'>LOGIN</Link>
        <br />
        <Link to='/friends'>FRIENDLIST</Link>
        <br />
        <Link to='/friends/add'>ADDFRIEND</Link>
        <br />
        <Link to='/logout'>LOGOUT</Link>
      </nav>

      <Routes>
        <Route exact path='/'  element={<Login />} />
        <Route exact path='/login' element={<Navigate to='/' />} />

        <Route exact path='/friends' element={<FriendList />} />
        <Route exact path='/friends/add' element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
