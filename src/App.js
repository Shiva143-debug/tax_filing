import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import DashBoard from "./DashBoard";
import { useEffect, useState } from "react";
import AdminDashBoard from "./AdminDashBoard";
import Mainpage from "./Mainpage";

function App() {
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem('userId');
  });


  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
  }, [userId]);

  return (
    // <p>Hii</p>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage/>} />
      <Route path="/login" element={<LoginForm setUserId={setUserId}/>} /> 
      <Route path="/register" element={<SignUpForm/>} /> 
      {/* <Route path="/dashBoard" element={<DashBoard  id={userId}/>} />
      <Route path="/adminDashBoard" element={<AdminDashBoard  id={userId}/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [activeTab, setActiveTab] = useState('home');

//   const onLoginPage=()=>{
//     navigate("./login")
//   }

//   return (
//     <div>
//       {/* Top Header */}
//       <div className="top-header">
//         <div className="contact-info">
//           <span>📧 admin@onetaxfiler.com</span>
//           <span>🕒 Sun-Sat: 9:00 am - 07:00 pm</span>
//           <span>📍 501 E 32nd St, Chicago, Illinois</span>
//         </div>
//         <div className="auth-buttons">
//           <button className="refer-btn">Refer →</button>
//           <button className="login-btn" onClick={onLoginPage}>Log In/Sign Up →</button>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="main-header">
//         <div className="logo">
//           <img src="https://via.placeholder.com/150x50?text=LOGO" alt="Logo" />
//         </div>
//         <nav className="nav-links">
//           <div className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</div>
//           <div className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About us</div>
//           <div className={`nav-link ${activeTab === 'services' ? 'active' : ''}`} onClick={() => setActiveTab('services')}>Services</div>
//           <div className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => setActiveTab('pricing')}>Our Pricing</div>
//           <div className={`nav-link ${activeTab === 'refund' ? 'active' : ''}`} onClick={() => setActiveTab('refund')}>Check Refund</div>
//           <div className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact us</div>
//           <div className="call-us">📞 CALL US</div>
//         </nav>
//       </header>

//       {/* Content Section */}
//       <div className="content-area">
//         {activeTab === 'home' && (
//           <div className="hero-section">
//             <h1>Hundreds of highly rated, verified Tax Experts</h1>
//             <p>Specialties include: tax forms, tax returns, Social Security, employee status, financial software, and more...</p>
//             <button className="book-btn">Book an appointment</button>
//           </div>
//         )}
//         {activeTab === 'about' && <div>About Us Content</div>}
//         {activeTab === 'services' && <div>Services Content</div>}
//         {activeTab === 'pricing' && <div>Pricing Content</div>}
//         {activeTab === 'refund' && <div>Check Refund Content</div>}
//         {activeTab === 'contact' && <div>Contact Us Content</div>}
//       </div>
//     </div>
//   );
// }

// export default App;

