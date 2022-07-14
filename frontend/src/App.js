import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { ImageCard } from "./components/ImageCard";
import { Welcome } from "./components/Welcome";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const URL = "https://api.unsplash.com/";

function App() {
  const [imgName, setImgName] = useState("");
  const [images, setImages] = useState([]);

  const handleDeleteImage = (imgId) => {
    setImages(images.filter((image) => image.id !== imgId));
  };

  const handleSearchSubmit = (e) => {
    const endPoint = "/photos/random";
    e.preventDefault();
    fetch(`${URL}${endPoint}?query=${imgName}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: imgName }, ...images]);
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
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
