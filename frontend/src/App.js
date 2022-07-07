import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { useState } from 'react';



const App = () => {
  const [imgName, setImgName] = useState('');
  useState('')
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(imgName);
  }

  
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit} imgName={imgName} setImgName={setImgName}/>
    </div>
  );
}

export default App;
