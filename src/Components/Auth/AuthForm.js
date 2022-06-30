import { useState, useRef, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import AuthContext from '../../Store/auth-context';
import './AuthForm.css'

const AuthForm = () => {
  const navigate = useNavigate()
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzAZw43OkgeuKbBthV51H35jo9ve-DqfE';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzAZw43OkgeuKbBthV51H35jo9ve-DqfE';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          
          let errorMessage = 'Authentication failed!';
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        alert(err.message)
      })
    }

    return (

      <div> 
        <h1 className='text-center mt-5 welcome'>Welcome To BridgeAxis eTicketing System!</h1><section className='auth'>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
            <div className='control'>
              <label htmlFor='email'>Your Email</label>
              <input type='email' id='email' required ref={emailInputRef} />
            </div>
            <div className='control'>
              <label htmlFor='password'>Your Password</label>
              <input
                type='password'
                id='password'
                required
                ref={passwordInputRef} />
            </div>
            <div className='actions'>
              {!isLoading && (
                <button>{isLogin ? 'Login' : 'Create Account'}</button>
              )}
              {isLoading && <p>Sending request...</p>}
              <button
                type='button'
                className='toggle'
                onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </button>
          </div>
        </form>
        </section>
        
</div>
  );
};

export default AuthForm;