const Nav = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Carro</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Register</a>
      </li>
    </ul>

  </div>
</nav>
  )
};
export default Nav;
