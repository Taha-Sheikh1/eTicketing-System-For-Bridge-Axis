import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../../Store/auth-context';
import './ToggleNavBar.css';

const ToggleNavBar = ({ToggleBar}) => {
  const navigate = useNavigate()
  const LogCtx = useContext(AuthContext)

  const ClickHandler = () => {
    ToggleBar(false)
    LogCtx.logout()
    navigate('/auth', { replace: true })
  }

  return (
    <div>
      
      <div className='container-fluid Navbar'>
      <ul className="nav flex-column ms-5 ">
         <li><Link to='/movies' onClick={ClickHandler}>Movies</Link></li>
         <li><Link to='/auth' className='LogBtn' onClick={ClickHandler}>LogOut</Link></li>
      </ul>
      </div>

    </div>
  )
}

export default ToggleNavBar;
