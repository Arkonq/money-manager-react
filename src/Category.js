import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = ({setRefresh}) => {

  const [category, setCategory] = useState({name: ''});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/categories', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(category)
    });
    setRefresh(true);
    navigate('/');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>      
      <h2 className="title">Category Creation Page</h2>
      <div className="form-group">
        <label>Name </label>
        <input type="text" value={category.name} onChange={(e) => setCategory({name: e.target.value})} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default Category;