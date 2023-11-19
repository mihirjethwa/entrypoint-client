import { Link } from "react-router-dom";
import Logo from "../../assets/logo/house-smile-svgrepo-com.svg";
import Bell from "../../assets/svg/notification-bell-2.svg";
import UserProfile from "../../assets/svg/user-profile.svg";
import "../../assets/styles/header/navbar.scss";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isLogin, setisLogin] = useState(false);

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
            <div className='login-link'>
              <p>Sign-In</p>
            </div>

            <div className='login-signup'>
              <p>Sign Up</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
