import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://localhost/mywebservice/index.php';

function App() {
  const [message, setMessage] = useState('');

  useEffect(()=> {
    axios.get(URL)
      .then((response) => {
        setMessage(response.data);
      }).catch (error => {
        alert(error);
      })
  },[])

  return (
    <div>
      <h3>Message from web-server</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
