import { useState } from 'react'
import './App.css'
import BookList from './components/BookList';



function App() {
  
  // let number = 0;

  const [number, setNumber] = useState(0);
  

  function changeNumber(){
    setNumber(number + 1)
  }
  return (
    <>
     
      <h1>Goedemiddag</h1>
      <h2>{number}</h2>
      <button onClick={changeNumber}>Click me</button>
      <BookList/>
     
      
    </>
  );
}

export default App;
