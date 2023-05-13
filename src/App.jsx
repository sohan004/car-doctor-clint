
import './App.css'
import logo from '../src/assets/logo.svg'
import Home from './Home'
import { Link, Outlet } from 'react-router-dom'
import { AuthContex } from './AuthProvider'
import { useContext } from 'react'

function App() {

  const {user, out} = useContext(AuthContex)
  const signOut = () =>{
    out()
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <img src={logo} alt="" className="img-fluid" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#">about</a>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/cart">service</Link>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              {user ? <li className="nav-item me-3">
                <button onClick={signOut} className="nav-link btn btn-danger text-white active " aria-current="page" >log out</button>
              </li> : <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/log">login</Link>
              </li>}
            </ul>
            <button type="button" className="btn btn-outline-danger">Appointment</button>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
