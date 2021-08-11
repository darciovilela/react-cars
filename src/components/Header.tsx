import logo from '../img/car.png';

export const Header = () => {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p className="p-header">
        Brasil's Best Selling Cars <br />
        2019 - 2020
      </p>
    </header>
  );
};
