import { useEffect, useState } from "react";
import Create from './Create'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Category from "./Category";


function App() {
  const [balance, setBalance] = useState();
  const [categories, setCategories] = useState([]);
  const [details, setDetails] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const updateData = async () => {
    const balance = await fetch('http://localhost:8000/accounts/1').then(res => res.json());
    const details = await fetch('http://localhost:8000/details').then(res => res.json());
    const categories = await fetch('http://localhost:8000/categories').then(res => res.json());
    setBalance(balance.balance);
    setDetails(details);
    setCategories(categories);
  }

  useEffect(() => {
    updateData();
    setRefresh(false);
  },[refresh])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home balance={balance} details={details} setRefresh={setRefresh}/>}/>
          <Route path='/create' element={<Create setRefresh={setRefresh} balance={balance} categories={categories} />}/>
          <Route path='/category' element={<Category setRefresh={setRefresh} />}/>
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
