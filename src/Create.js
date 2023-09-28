import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = ({ setRefresh, balance, categories}) => {
  const [sum, setSum] = useState(0);
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('Income');
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if Sum field is empty
    if (sum === 0) return;
    // Change balance
    const newBalance = type === 'Income' ? balance + sum : balance - sum;
    fetch('http://localhost:8000/accounts/1', {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({balance: newBalance})
    });    
    // Change details
    fetch('http://localhost:8000/details', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ sum: sum, desc: desc, type: type, category: categoryName})
    });
    setRefresh(true);
    navigate('/');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="title">Create Page</h2>
      <div className="form-group">
        <label htmlFor="sum">Sum </label>
        <input required type="number" id="sum" value={sum} onChange={(e) => setSum(e.target.valueAsNumber)} />
      </div>
      <div className="form-group">
        <label>Type </label>
        <select value={type} onChange={(e) => setType(e.target.value)} >
          <option value="Income">Income</option>
          <option value="Outcome">Outcome</option>
        </select>
      </div>
      <div className="form-group">
        <label>Category </label>
        <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)} >
          {categories.map((category) =>
            <option key={category.id} value={category.name}>{category.name}</option>
          )}
        </select>
      </div>
      <div className="form-group">
        <label>Desc </label>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default Create;