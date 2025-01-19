import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Child from './comps/Child';
import RandomMouseMove from './comps/RandomMouseMove';

console.log('outside App')
function App() {

  const [st, setSt] = useState(0)
  {console.log('above useEffect')}

  useEffect(() => {
    console.log('inside useEffect above setSt')
    setSt(2001)
    console.log('inside useEffect below setSt')

  }, [])
  {console.log('below useEffect')}

  return (
      <RandomMouseMove />
  );
}

export default App;
