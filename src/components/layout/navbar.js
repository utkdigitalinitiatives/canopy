import * as React from "react"
import Logo from "../../images/utk-logo.png"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#">
        <img className= "logo-image" src={ Logo } />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Browse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)

export default Navbar
