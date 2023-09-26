import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = ({categories, setCategories}) => {

  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let newCategories = categories.concat();
    newCategories.push(category);
    console.log(newCategories);
    setCategories(newCategories);
    navigate('/');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>      
      <div className="form-group">
        <label>Name </label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default Category;