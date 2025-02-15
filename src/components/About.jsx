import React from 'react';
import './style.css';
import product from './Products.jpg'
import Navigation from './Navigation';
import Footer from './Footer';
export default function AboutUs() {
  return (
    <div className="about-page">
      <header className="about-header">
        <Navigation/>
      </header>

      <section className="about-section">
        <div className="image-container">
          <img src={product} alt="About Us Image" className="about-image" />
          <h1>About Us</h1>


        </div>
        <div className="about-content">
          <h2>Welcome to Our Tasty Corner!</h2>
          <p>At Tasty Corner we believe that cooking is more than just a task—it's an experience. Our mission is to bring the joy of cooking into every kitchen, with easy-to-follow recipes that cater to both novices and experts alike.</p>
          <p>From hearty dinners to delectable desserts, we cover it all. Our team of culinary enthusiasts works tirelessly to test and curate recipes that are not only delicious but also achievable for home cooks.</p>
          <p>Join us on this culinary journey and explore a world of flavors. Whether you're looking to whip up a quick meal or impress your guests with a gourmet feast, we have something for everyone.</p>
          <p>Thank you for being a part of our community. Happy cooking!</p> 
        </div>
      </section>
<Footer/>
    </div>
  );
}
