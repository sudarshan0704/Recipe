import React, { useEffect, useState } from 'react';
import './cardstyle.css';
import axios from 'axios';
import myimg from './pexels-janetrangdoan-1128678.jpg';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function RecipeCard() {
  const [dish, setDish] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searched, setSearched] = useState('');
  const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("saved")) || []);
  const navigate = useNavigate();

  // API call
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        setDish(res.data.recipes);
        setFiltered(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Search process
  useEffect(() => {
    if (searched) {
      setFiltered(dish.filter(item => item.name.toLowerCase().includes(searched.toLowerCase())));
    } else {
      setFiltered(dish);
    }
  }, [searched, dish]);

  // To navigate to full page
  function selectCard(i) {
    setSelectedDish(dish[i]);
    navigate("/selecteddish/" + i);
  }

  // Add to collection
  function storelocal(item) {
   alert("successfully stored in my collection....go to my colection")
    const newAdd = [...saved, item];
    setSaved(newAdd);
    localStorage.setItem("saved", JSON.stringify(newAdd));
    console.log(newAdd, 23232);
    
  }

  return (
    <div>
      <Navigation />

      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>

        <input
          id="query"
          className="input"
          type="search"
          placeholder="Search..."
          name="searchbar"
          onChange={(e) => setSearched(e.target.value)}
        />
      </div>

      <div className="itempage">
        <div className='itemslist'>
          {filtered.length > 0 ? filtered.map((item, index) => (
            <div key={index} className="recipe-card" onClick={() => selectCard(item.id)}>
              <img src={item.image} alt={item.title} className="recipe-image" />
              <button className="cssbuttons-io-button" onClick={() => storelocal(item)}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                </svg>
                <span>Add</span>
              </button>
              <div className="recipe-details">
                <h2 className="recipe-title">{item.name}</h2>
                <p className="recipe-info">
                  <span className="icon">⏲</span> {item.cookTimeMinutes} minutes
                </p>
                <p className="difficulty" style={item.difficulty === 'Easy' ? { backgroundColor: "green", width: "50px", color: "white" } : { backgroundColor: "yellow", width: "60px", color: "black" }}>{item.difficulty}</p>
                <ul>
                  {item.tags.map((tag, i) => (
                    <li key={i}>[{tag}]</li>
                  ))}
                </ul>
              </div>
            </div>
          )) : (
            <div className="recipe-card">
              <h1>No data found</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
