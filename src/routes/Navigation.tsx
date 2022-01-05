import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
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
                <NavLink to='/home'>Home</NavLink>
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
            <Route path='home' element={<h1>Home</h1>}/>
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
