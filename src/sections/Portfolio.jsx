// src/sections/Portfolio.jsx
import React from 'react';

const Portfolio = () => (
  <section class="work">
    <h2 class="h2-fill">Portfolio</h2>
    <div class="work-1">
      <h3>"Get Stubs" (Event Share Site)</h3>
      <a class="work-1" href="https://get-stubs-32478408ec54.herokuapp.com/" target='_blank'><img class="img-1"src="public/Get_Stubs_SS.png" alt="Get Stubs Screen Shot Link" /></a>
    </div>
    <div class="work-2">
      <h3>"Weather Dashboard"</h3>
      <a class="work-2 row" href="https://chadoyek.github.io/Weather-Dashboard/" target='_blank'><img class="img-2" src="public/WeatherDash_2.png" alt="Weather Dashboard Screen Shot Link" /></a>
    </div>
    <div class="work-3">
      <h3>"Groove Guide" (Music Event Finder)</h3>
      <a class="work-3 row" href="https://chadoyek.github.io/Groove-Guide-Project-1/" target='_blank'><img class="img-2" src="public/main-work0.png" alt="Groove Guide Screen Shot Link" /></a>
    </div>
  </section>

);

export default Portfolio;