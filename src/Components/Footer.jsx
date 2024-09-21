import React from 'react'

const Footer = () => {
  return (
    <> 
        <div className='footer'>
            <p className='footer-para'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='footer-form'>
                <form className='main-log-form'>
                    <label>
                        <input className='footer-inp-email' placeholder='Email address'/>
                    </label>
                    <button className='inp-val' type='submit'>
                        Get Started 
                        <span className='arrow'>&#9002;</span>
                    </button>
                </form>
            </div>
            <span className='footer-contact'> Questions?  Call <span className='footer-contact-nu'>000-800-919-1694</span></span>
            <div className='footer-add-info'>
                <div className='footer-add-info-lines'>
                    <p className='add-info-tabs'>FAQ</p>
                    <p className='add-info-tabs'>Investor Relations</p>
                    <p className='add-info-tabs'>Privacy</p>
                    <p className='add-info-tabs'>Speed Test</p>
                </div>
                <div className='footer-add-info-lines'>
                    <p className='add-info-tabs'>Help Centre</p>
                    <p className='add-info-tabs'>Jobs</p>
                    <p className='add-info-tabs'>Cookie Preferences</p>
                    <p className='add-info-tabs'>Legal Notices</p>
                </div>
                <div className='footer-add-info-lines'>
                    <p className='add-info-tabs'>Account</p>
                    <p className='add-info-tabs'>Ways to Watch</p>
                    <p className='add-info-tabs'>Corporate Information</p>
                    <p className='add-info-tabs'>Only on Netflix</p>
                </div>
                <div className='footer-add-info-lines'>
                    <p className='add-info-tabs'>Media Center</p>
                    <p className='add-info-tabs'>Terms of use</p>
                    <p className='add-info-tabs'>Contact Us</p>
                </div>
            </div>
            <select id="option" name='english'>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
            <p className='final-word'>Netflix India</p>
        </div>
    </>
  )
}

export default Footer