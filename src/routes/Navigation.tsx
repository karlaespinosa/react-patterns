import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import Logo from '../logo.svg'; 

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={Logo} alt='React Logo'/>
            <ul>
              <li>
                <NavLink to='/home'>Shopping Page</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/users'>Users</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='home' element={<ShoppingPage />}/>
            <Route path='about' element={<h1>About</h1>}/>
            <Route path='users' element={<h1>Users</h1>}/>
            <Route path='/*' element={<Navigate to='/home' replace />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Navigation;
