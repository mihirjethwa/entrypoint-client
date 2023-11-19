import { Link } from "react-router-dom";
import Logo from "../../assets/logo/house-smile-svgrepo-com.svg";
import Bell from "../../assets/svg/notification-bell-2.svg";
import UserProfile from "../../assets/svg/user-profile.svg";
import "../../assets/styles/header/navbar.scss";
import { useState } from "react";
import Modal from "../modal/Modal";

const Navbar: React.FC = () => {
  const [isLogin, setisLogin] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errMessage, seterrMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call the onSubmit prop with the form data
    // onSubmit({ email, password });
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const createAccount = (flag: boolean) => {
    if (flag) {
      closeSignInModal();
      openSignUpModal();
    } else {
      closeSignUpModal();
      openSignInModal();
    }
  };

  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='/'>
          <div className='logo'>
            <img src={Logo} alt='Logo' className='logo-svg' />
            <p className='logo-text'>EntryPoint</p>
          </div>
        </Link>
      </div>
      <div className='link'>
        <Link to='/about'>About</Link>
        <Link to='/buy'>Buy</Link>
        <Link to='/sell'>Sell</Link>
        <Link to='/agents'>Agents</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div className='account'>
        {isLogin ? (
          <div className='auth'>
            <Link to='/profile'>
              <div className='auth-auth-div'>
                <p className='auth-name'>Mihir Jethwa</p>
                <img src={UserProfile} className='auth-img' />
              </div>
            </Link>
            <img src={Bell} alt='Bell' className='auth-bell' />
          </div>
        ) : (
          <div className='login'>
            <div className='login-link' onClick={openSignInModal}>
              <p>Sign-In</p>
            </div>

            <div className='login-signup' onClick={openSignUpModal}>
              <p>Sign Up</p>
            </div>
          </div>
        )}
      </div>
      {isSignInModalOpen && (
        <Modal onClose={closeSignInModal}>
          <div className='in'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div className='in-div'>
                <p>Email</p>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='in-input' />
              </div>
              <div className='in-div'>
                <p>Password</p>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='in-input' />
                <Link to='reset' className='in-forgot'>
                  <p>Forgot Password?</p>
                </Link>
              </div>
              {errMessage.length !== 0 ? (
                <div className='in-div'>
                  <p className='in-error'>{errMessage}</p>
                </div>
              ) : (
                ""
              )}
              <div>
                <button type='submit' className='in-btn'>
                  LOGIN
                </button>
              </div>
              <div className='in-div'>
                <p className='in-create'>
                  New User?<span onClick={() => createAccount(true)}>&nbsp; Create a Account</span>
                </p>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {isSignUpModalOpen && (
        <Modal onClose={closeSignUpModal}>
          <div className='in'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className='in-div'>
                <p>Name</p>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required className='in-input' />
              </div>
              <div className='in-div'>
                <p>Email</p>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='in-input' />
              </div>
              <div className='in-div'>
                <p>Password</p>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='in-input' />
              </div>
              <div className='in-div'>
                <p>Confirm Password</p>
                <input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='in-input' />
              </div>
              {errMessage.length !== 0 ? (
                <div className='in-div'>
                  <p className='in-error'>{errMessage}</p>
                </div>
              ) : (
                ""
              )}

              <div>
                <button type='submit' className='in-btn'>
                  CREATE ACCOUNT
                </button>
              </div>
              <div className='in-div'>
                <p className='in-create'>
                  Already a user?<span onClick={() => createAccount(false)}>&nbsp; Sign In</span>
                </p>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
