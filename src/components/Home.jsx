import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import img from './logo.jpg'
import Navigation from './Navigation'
import Footer from './Footer'
import img1 from './efrl2jm8_chicken-curry_625x300_24_December_23.webp'
export default function Home() {
    let nav = useNavigate()
    function shift() {
        nav('/dishes')
    }
    return (
        <div className='home'>
            <Navigation />
            <div className='content'>
                <h1>From Our </h1>
                <h1>Kitchen to</h1>
                <h1><span>Yours..!</span></h1>
                <button onClick={shift}>Get Started</button>
            </div>
            <div className='section2'>
                <div className='page1'>
                    <h1>WHY CHOOSE US?</h1>
                    <img src={img1} alt="" width="auto" height="auto" />
                    <p>At Tastequest, we are passionate about premium-quality foods sourced from accredited producers from around the world, and are dedicated to working closely with our customers to ensure their successes.

                        To fulfil our aims, we are proud to offer the following:

                     


                        </p>
                </div>
                
            </div>
            <div className='section1'>
                <div className="page2">

                    <article>
                        <p>  Welcome to our Taster, where passion meets flavor and every
                            recipe tells a unique story. At Taster we believe that cooking is not just about preparing
                            food—it's about creating memories, sharing love, and embracing the joy of every meal.</p>
                    </article>
                </div>
            </div>

            <Footer />

        </div>
    )
}
