import { Outlet, Link } from "react-router-dom";

export default function Layout() {

  function menuToggle() {
    let menuList= document.querySelector('.header-menu-list-mobile')
    let menuButton = document.querySelector('.header-menuButton')
    menuList.classList.toggle('opened')
    menuButton.classList.toggle('opened')
  }

  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/" className="header-brand">Genie Rural <span>tools</span></Link>
          <ul className="header-menu-list-desktop">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bassins">Bassins</Link></li>
            <li><Link to="/pompage">Pompage</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <a className="header-menuButton" onClick={menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul className="header-menu-list-mobile">
            <li><Link onClick={menuToggle} to="/">Home</Link></li>
            <li><Link onClick={menuToggle} to="/bassins">Bassins</Link></li>
            <li><Link onClick={menuToggle} to="/pompage">Pompage</Link></li>
            <li><Link onClick={menuToggle} to="/about">About</Link></li>
          </ul>
        </div>
      </header>
      <Outlet />
      <footer>Created with 🤍	by <span>Anas Asimi</span>.</footer>
    </>
  )
};


