import React from 'react'
import './App.css';
import HeaderLinks from './components/headerLinks/HeaderLinks'
import FooterLinks from './components/footerLinks/footerLinks'
import top from './assets/oldman.png'
import './assets/pictures.css'


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <HeaderLinks/>
      <img src={top} className='pictures'></img>
      <FooterLinks/>
    </div>
  );
}

export default App;
