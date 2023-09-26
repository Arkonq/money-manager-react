import { useState } from "react";
import Create from './Create'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Category from "./Category";


function App() {
  const [balance, setBalance] = useState(36);
  const [categories, setCategories] = useState(['Basic', 'Sport']);
  const [details, setDetails] = useState([
    {
      sum: 40,
      desc: "Present from mum",
      type: 'Income',
      category: 'Basic',
    },
    {
      sum: 4,
      desc: "Bougth ice-cream",
      type: 'Outcome',
      category: 'Basic',
    },
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home balance={balance} details={details}/>}/>
          <Route path='/create' element={<Create balance={balance} setBalance={setBalance} details={details} setDetails={setDetails} categories={categories} />}/>
          <Route path='/category' element={<Category categories={categories} setCategories={setCategories} />}/>
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
