import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import About from './About';
import Services from './Services';
import Pricing from './Pricing';
import Refund from './Refund';
import Contact from './Contact';
import HeroSection from './HeroSection';

function Mainpage() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('home');

    const onLoginPage = () => {
        navigate("/login")
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'about': return <About />;
            case 'services': return <Services />;
            case 'pricing': return <Pricing />;
            case 'refund': return <Refund />;
            case 'contact': return <Contact />;
            default: return <HeroSection />;
        }
    };

    return (
        <div className='vw-100'>
            {/* Top Header */}
            <div className="top-header">
                <div className="contact-info">
                    <span>📧 admin@onetaxfiler.com</span>
                    <span>🕒 Sun-Sat: 9:00 am - 07:00 pm</span>
                    <span>📍 501 E 32nd St, Chicago, Illinois</span>
                </div>
                <div className="auth-buttons">
                    <button className="refer-btn">Refer →</button>
                    <button className="login-btn" onClick={onLoginPage}>Log In/Sign Up →</button>
                </div>
            </div>

            {/* Main Header */}
            <header className="main-header">
                <div className="logo">
                    <img src="https://via.placeholder.com/150x50?text=LOGO" alt="Logo" />
                </div>
                <nav className="nav-links">
                    <div className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</div>
                    <div className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About us</div>
                    <div className={`nav-link ${activeTab === 'services' ? 'active' : ''}`} onClick={() => setActiveTab('services')}>Services</div>
                    <div className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => setActiveTab('pricing')}>Our Pricing</div>
                    <div className={`nav-link ${activeTab === 'refund' ? 'active' : ''}`} onClick={() => setActiveTab('refund')}>Check Refund</div>
                    <div className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact us</div>
                    <div className="call-us">📞 CALL US</div>
                </nav>
            </header>

            {/* Content Section */}
            {/* <div className="content-area">
        {activeTab === 'home' && (
          <div className="hero-section">
            <h1>Hundreds of highly rated, verified Tax Experts</h1>
            <p>Specialties include: tax forms, tax returns, Social Security, employee status, financial software, and more...</p>
            <button className="book-btn">Book an appointment</button>
          </div>
        )}
        {activeTab === 'about' && <div>About Us Content</div>}
        {activeTab === 'services' && <div>Services Content</div>}
        {activeTab === 'pricing' && <div>Pricing Content</div>}
        {activeTab === 'refund' && <div>Check Refund Content</div>}
        {activeTab === 'contact' && <div>Contact Us Content</div>}
      </div> */}

            <div className="content-area">{renderTabContent()}</div>
        </div>

    );
}

export default Mainpage;