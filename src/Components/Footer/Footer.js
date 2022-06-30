import React, {useContext} from 'react';
import AuthContext from '../../Store/auth-context';
import './Footer.css';


const Footer = () => {

  const authCtx = useContext(AuthContext)

  return (
     <div>
{authCtx.isLoggedIn &&
  <footer id="footer">
  <div className="footer-top">
    <div className="copyrights text-center">
      <h1>&copy; Copyright 2020-2022 Bridge Axis</h1>
    </div>
  </div>
  </footer>
}
    </div> 
    )
}

export default Footer