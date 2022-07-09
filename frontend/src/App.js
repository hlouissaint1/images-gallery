import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { useState } from 'react';


const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const URL = 'https://api.unsplash.com/';

const App = () => {
  const [imgName, setImgName] = useState('');
  useState('')
  
  const handleSearchSubmit = (e) => {
    const endPoint = '/photos/random';
    e.preventDefault();
    console.log(imgName);
    fetch(`${URL}${endPoint}?query=${imgName}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
      setImgName('');
  }
  console.log(UNSPLASH_KEY);
  
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit} imgName={imgName} setImgName={setImgName}/>
    </div>
  );
}

export default App;
