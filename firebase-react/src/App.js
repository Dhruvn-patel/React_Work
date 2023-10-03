import app from './firebase'
import {ref ,getDatabase,set} from 'firebase/database'
import './App.css';
import { Button } from '@mui/material';

function App() {
  const database=getDatabase();
 
  const addData=()=>{
    set(ref(database,'users/'),{
      name:"Dhruv",
      email:"Dh01 @gmail.com"
    })
  }
  return (
    <div className="App">
      <h1>Firebase</h1>
      <Button onClick={addData}> Add Data</Button>
    </div>
  );
}

export default App;
