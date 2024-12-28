import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './cardstyle.css';

export default function Mycollection() {
  let navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);

  // to get data from my local .///////
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('saved')) || [];
    setFiltered(savedItems);
  }, []);
//function to navigate to full card page /............
  function selectCard(i) {
    navigate("/selecteddish/" + i);
  }

  // Function to remove an item from the collection/..............
  function removeItem(index) {
    const updatedCollection = filtered.filter((_, i) => i !== index);
    setFiltered(updatedCollection);
    localStorage.setItem('saved', JSON.stringify(updatedCollection));
  }

  console.log(filtered, 99);

  return (
    <div>
      <Navigation/>
      <div className='itemslist'>
        {filtered.length > 0 ? filtered.map((item, index) => (
          <div key={index} className="recipe-card">
            <img src={item.image} alt={item.name} className="recipe-image" onClick={() => selectCard(item.id)} />
            <button className="remove-button" onClick={() => removeItem(index)}>
             ✕
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
      <Footer/>
    </div>
  );
}
