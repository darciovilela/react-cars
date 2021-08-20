import logo from '../img/car.png';

interface IProps {
  page: string;
  setPage: Function;
}

const pages = ['Dezenove', 'Vinte'];

export const Header = (props: IProps) => {
  const menuItem = (pageName: string) => {
    return (
      <li
        key={pageName}
        onClick={() => props.setPage(pageName)}
        className={props.page === pageName ? 'active' : ''}
      >
        {pageName}
      </li>
    );
  };

  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p className="p-header">
        Brazil's Best Selling Cars <br />
        2019 - 2020
      </p>
      <div>
        <ul>{pages.map((item) => menuItem(item))}</ul>
      </div>
    </header>
  );
};
