
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { motion } from 'framer-motion';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './HeroSection.css';


// const HeroSection = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         beforeChange: (current, next) => setCurrentSlide(next),
//     };

//     const slides = [
//         {
//             title: "Welcome to Our Service",
//             subtitle: "Get started with the best service in the industry.",
//             buttonText: "Book Appointment",
//             buttonAnimation: "slide-from-right",
//         },
//         {
//             title: "Premium Solutions",
//             subtitle: "Unlock the potential of our premium features.",
//             buttonText: "Get Started",
//             buttonAnimation: "slide-from-left",
//         },
//         {
//             title: "Join Us Now",
//             subtitle: "Be a part of our growing community.",
//             buttonText: "Sign Up",
//             buttonAnimation: "slide-from-top",
//         },
//     ];

//     return (
//         <div className="hero-section">
//             <Slider {...sliderSettings}>
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`hero-slide slide-${index}`}
//                     >
//                         {/* <div className="hero-content">
//                             <h1>{slide.title}</h1>
//                             <p>{slide.subtitle}</p>
//                             <button className={`btn-animate ${slide.buttonAnimation}`}>
//                                 {slide.buttonText}
//                             </button>
//                         </div> */}

//                         <motion.div
//                             className={`hero-content content-align-${index}`}
//                             initial={
//                                 index === 0
//                                     ? { opacity: 0, x: 100 }
//                                     : index === 1
//                                         ? { opacity: 0, y: -100 }
//                                         : { opacity: 0, x: -100 }
//                             }
//                             animate={{ opacity: 1, x: 0, y: 0 }}
//                             transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
//                         >
//                             <h1>{slide.title}</h1>
//                             <p>{slide.subtitle}</p>
//                             <button className={`btn-animate ${slide.buttonAnimation}`}>
//                                 {slide.buttonText}
//                             </button>
//                         </motion.div>

//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default HeroSection;



import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";
import Services from "./Services";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const slides = [
        {
            title: "Welcome to Our Service",
            subtitle: "Get started with the best service in the industry.",
            buttonText: "Book Appointment",
            buttonAnimation: "slide-from-left",
        },
        {
            title: "Premium Solutions",
            subtitle: "Unlock the potential of our premium features.",
            buttonText: "Book Appointment",
            buttonAnimation: "slide-from-top",
        },
        {
            title: "Join Us Now",
            subtitle: "Be a part of our growing community.",
            buttonText: "Book Appointment",
            buttonAnimation: "slide-from-right",
        },
    ];

    return (
        <>
            <div className="hero-section">
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index} className={`hero-slide slide-${index}`}>
                            {currentSlide === index ? (
                                <motion.div
                                    key={index}
                                    className={`hero-content content-align-${index}`}
                                    initial={
                                        index === 0
                                            ? { opacity: 0, x: -100 } // Left
                                            : index === 1
                                                ? { opacity: 0, y: -100 } // Top
                                                : { opacity: 0, x: 100 } // Right
                                    }
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                >
                                    <h1>{slide.title}</h1>
                                    <p>{slide.subtitle}</p>
                                    <button className="btn-animate">{slide.buttonText}</button>
                                </motion.div>
                            ) : (
                                <div className="hero-content" style={{ opacity: 0 }}></div>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
            <Services />
        </>
    );
};

export default HeroSection;
