import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import Logo from '../../Assets/image.png'
import AuthContext from '../../Store/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ToggleNavBar from './ToggleNavBar';



const Header = () => {
  const navigate = useNavigate()
  const LogCtx = useContext(AuthContext);
  const [ToggleNav, setToggleNav] = useState(false); 

  const ToggleDropdownHandler = (e) => {
     e.preventDefault();
       setToggleNav((prevState) => !prevState)
  }
  const LogoutHandler = () => {
    LogCtx.logout()
    navigate('/auth', { replace: true })
  }

  return (
    <div>
      {LogCtx.isLoggedIn && 
       
       <header className='header'>
      <Link to='/movies'>
        <img src={Logo} className='logo img-fluid' alt='Bridge Axis' />
      </Link>
      <nav>
        <ul>
           
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
           
            <li>
            <Link to='/auth' className='button' onClick={LogoutHandler}>LogOut</Link>
            </li>
           
        </ul>
      </nav>
      { !ToggleNav ? <FontAwesomeIcon icon={faBars} className="ms-auto mobile-nav" onClick={ToggleDropdownHandler} />  : <FontAwesomeIcon icon={faXmark} className="ms-auto mobile-nav" onClick={ToggleDropdownHandler} />  }
    </header>
      }
     {ToggleNav ? <ToggleNavBar ToggleBar={setToggleNav} /> : null}
   
    </div>
  )
}

export default Header;

