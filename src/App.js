import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {
  const [users, getUsers] = useState([])
  const getAllUsers = () => {
    axios.get('/api/users').then(result => {
      getUsers([{'name': 'narayan'}])
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Is react application</h1>
        <button onClick={getAllUsers} style={{background:'green', color:'white', borderRadius:'5px', padding:'10px'}}>Get Users From Backend</button>
        <table>
          {
            users.map(user => {
              return <tr>
                <td>
                  {user.name}
                </td>
              </tr>
            })
        }
        </table>
      </header>
    </div>
  );
}

export default App;
