import './App.css';
import Navbar from './components/Navbar'
import { useState } from 'react'
import Pages from './components/Pages';

function App() {
  // const [page, setPage] = useState("Planets") //#=> ["Planets", f(){}]

  return (
    <div className="App">
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
