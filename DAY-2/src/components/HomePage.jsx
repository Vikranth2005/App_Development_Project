import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const HomePage = () => {
    return (
        <div className='home__container'>
            <header className='home__header'>
                <div className='header__title'>
                    <h1>Welcome to Our Website</h1>
                </div>
                <div className='header__links'>
                    <Link to="/login" className='header__link'>Login</Link>
                    <Link to="/register" className='header__link'>Register</Link>
                </div>
            </header>
            <main className='home__main'>
                <h2>About Us</h2>
                <p>We are a company dedicated to providing the best service to our customers. Our mission is to deliver quality and excellence in everything we do.</p>
            </main>
            <footer className='home__footer'>
                <div className='footer__about'>
                    <h3>About</h3>
                    <p>Learn more about our company, our values, and our mission.</p>
                </div>
                <div className='footer__contact'>
                    <h3>Contact</h3>
                    <p>Email: info@ourwebsite.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
