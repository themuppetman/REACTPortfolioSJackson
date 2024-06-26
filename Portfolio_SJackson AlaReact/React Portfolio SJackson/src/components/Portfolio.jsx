import React, { useState } from 'react';


function Portfolio() {
  const [Portfolio, setPortfolio] = useState([]);

  return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <p>Some of my work...</p>
      </div>
    
  );
}

export default Portfolio;
 