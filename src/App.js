import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {
  const [users, getUsers] = useState([])
  const getAllUsers = () => {
    axios.get('/api/users').then(result => {
      getUsers(result.data)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Is react application</h1>
        <button onClick={getAllUsers} style={{background:'green', color:'white', borderRadius:'5px', padding:'10px'}}>Get Users From Backend</button>
        <table>
          <tbody>
          {
            users.map((user, key) => {
              return <tr key={key}>
                <td>
                  {user.name}
                </td>
              </tr>
            })
        }
        </tbody>
        </table>
        <div>
          Image uses for CDN (caching) updated<br/>
        <img src={'/images/1Odq43G.jpg'} width="400"/>
        <img src={'/images/IMG_20191230_102402.jpg'}  width="400"/>
        <img src={'/images/IMG_20191230_123630.jpg'} width="400"/>
        <img src={'/images/IMG_20191230_124033.jpg'} width="400"/>
        <img src={'/images/IMG_20191230_124035.jpg'} width="400"/>
          </div>
      </header>
    </div>
  );
}

export default App;
