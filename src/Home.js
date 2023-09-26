import Details from './Details';

const Home = ({balance, details}) => {
  return (
    <div className="home">
      <div className="home__body">
        <h2 className="title">Balance: {balance}$</h2>
        <Details details={details} />
      </div>
    </div>
  );
}

export default Home;