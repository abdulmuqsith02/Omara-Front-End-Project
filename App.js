// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Analytics from './components/Analytics';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3001/users');
    return response.json();
  };

  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <UserForm currentUser={currentUser} fetchUsers={fetchUsers} setCurrentUser={setCurrentUser} />
      <UserList setCurrentUser={setCurrentUser} fetchUsers={fetchUsers} />
      <Analytics />
    </div>
  );
};

export default App;
