import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer class="footer">
                <div class="container">
                    <div class="footer-section">
                        <h2>Contact Us</h2>
                        <p>Email: <a href="mailto:info@recipewebsite.com">info@recipewebsite.com</a></p>
                        <p>Phone: <a href="tel:+123456789">+123-456-789</a></p>
                        <p>Address: 1234 Culinary Lane, Food City, FC 56789</p>
                    </div>
                    <div class="footer-section">
                        <h2>Follow Us</h2>
                        <div class="social-links">
                            <a href="https://facebook.com" target="_blank">Facebook</a>
                            <a href="https://twitter.com" target="_blank">Twitter</a>
                            <a href="https://instagram.com" target="_blank">Instagram</a>
                            <a href="https://pinterest.com" target="_blank">Pinterest</a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h2>About Us</h2>
                        <p>Discover delicious recipes and culinary inspiration from around the world. Join our community and share your passion for cooking.</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2023 Recipe Website. All rights reserved.</p>
                </div>
            </footer>
    </div>
  )
}
