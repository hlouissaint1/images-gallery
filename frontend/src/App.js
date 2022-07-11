import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const URL = "https://api.unsplash.com/";

function App() {
  const [imgName, setImgName] = useState("");
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (e) => {
    const endPoint = "/photos/random";
    e.preventDefault();
    console.log(imgName);
    fetch(`${URL}${endPoint}?query=${imgName}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setImgName("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        handleSubmit={handleSearchSubmit}
        imgName={imgName}
        setImgName={setImgName}
      />
    </div>
  );
}

export default App;
