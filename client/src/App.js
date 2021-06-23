import React from 'react'
import './App.css';
import HeaderLinks from './components/headerLinks/HeaderLinks'
import top from './assets/oldman.png'
import './assets/pictures.css'
import ScrollingDiv from './components/ScrollingDiv/ScrollingDiv'


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
      
      <ScrollingDiv/>
      
    </div>
  );
}

export default App;
