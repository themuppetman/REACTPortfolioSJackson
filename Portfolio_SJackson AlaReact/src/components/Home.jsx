import { useState } from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';


function Home() {
  const [home, setHome] = useState([]);

  return (
    <div className="home">
        <h1>Portfolio</h1>
        <Portfolio onSubmit = {setHome} />
    </div>
  );
}

export default Home;