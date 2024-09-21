import React, { useState } from 'react';
import Logo from "../Images/NetFlix_Logo.png";

const Navbar = () => {
  const [inputs, setInputs] = useState({ email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputs.email === "") {
      setError("Please enter the email address");
      setSuccess('');
    } else if (!emailRegex.test(inputs.email)) {
      setError("Please enter a valid email address");
      setSuccess('');
    } else {
      setError('');
      setSuccess("Email is verified");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  return (
    <>
      <div className='navbar' />
      <div className='navbar-1'>
        <img className='navbar-logo-image' src={Logo} alt='Netflix Logo' />
      </div>
      <div className='navbar-opt'>
        <button className='btn-lan'>English</button>
        <button className='btn-sign'>Sign In</button>
      </div>
      <div className='main-cnt'>
        <h1 className='main-h-1'>Unlimited movies,</h1>
        <h1 className='main-h-1'>TV shows and more</h1>
        <h1 className='main-h-2'>Starts at ₹149. Cancel anytime.</h1>
        <h1 className='main-h-3'>Ready to watch? Enter your email to create or restart your membership.</h1>
      </div>
      <div className='main-log'>
        <form className='main-log-form' onSubmit={handleSubmit}>
          <label>
            <input
              className='inp-email'
              type='email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              placeholder='Email address'
            />
          </label>
          <button className='inp-val' type='submit'>
            Get Started 
            <span className='arrow'>&#9002;</span>
          </button>
        </form>
        {error && <p className='error-message'>{error}</p>}
        {success && <p className='success-message'>{success}</p>}
      </div>
    </>
  );
};

export default Navbar;
