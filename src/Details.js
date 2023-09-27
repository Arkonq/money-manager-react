const details = ({ details, setRefresh, balance }) => {

  const handleDelete = (item) => {
    // Delete details
    fetch('http://localhost:8000/details/' + item.id, {
      method: 'DELETE'
    });
    // Return balance back
    const newBalance = item.type === 'Income' ? balance - item.sum : balance + item.sum;
    fetch('http://localhost:8000/accounts/1', {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({balance: newBalance})
    }); 
    setRefresh(true);
  }

  return (
    <div className="details__list">
      {details.map(detail =>
        <div key={detail.id} className="details__item" style={{ color: detail.type === 'Income' ? 'green' : 'red' }}>
          <div>Summ: {detail.sum}</div>
          <div>Description: {detail.desc}</div>
          <div>Type: {detail.type}</div>
          <div>Category: {detail.category}</div>
          <button className="delete" onClick={() => handleDelete(detail)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default details;