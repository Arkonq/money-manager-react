const details = ({ details }) => {
  return (
    <div className="details__list">
      {details.map(detail =>
        <div className="details__item" style={{ color: detail.type === 'Income' ? 'green' : 'red' }}>
          <div>Summ: {detail.sum}</div>
          <div>Description: {detail.desc}</div>
          <div>Type: {detail.type}</div>
          <div>Category: {detail.category}</div>
        </div>
      )}
    </div>
  );
}

export default details;