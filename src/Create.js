import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = ({balance, setBalance, details, setDetails, categories}) => {
  const [sum, setSum] = useState(0);
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sum === 0) return;
    type === 'Income' ? setBalance(balance + sum) : setBalance(balance - sum);
    let newDetails = details.concat();
    newDetails.push({ sum: sum, desc: desc, type: type, category: category });
    console.log(newDetails);
    setDetails(newDetails);
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
        <select value={category} onChange={(e) => setCategory(e.target.value)} >
          {categories.map((category) =>
            <option value={category}>{category}</option>
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