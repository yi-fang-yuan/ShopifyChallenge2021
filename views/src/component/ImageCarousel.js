import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

const ImageCarousel = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      let { data } = await axios.get("/api/images");
      setImages(data.images);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Carousel>
      {images
        ? images.map((image) => {
            return (
              <Carousel.Item key={image._id}>
                <img
                  className=" w-100 img-fluid"
                  src={image.url}
                  alt="carousel"
                />
                <Carousel.Caption>
                  <h3>{image.description}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        : null}
    </Carousel>
  );
};

export default ImageCarousel;