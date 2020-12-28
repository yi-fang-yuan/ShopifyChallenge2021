import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from "axios";
const ImageBoard = () => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        getImage();
    });

    const getImage = async () => {
        let { data } = await axios.get("/api/images")
        setImages(data.images)
    }

    const handleDelete = async(image) => {
        console.log(image);
        await fetch("/api/images", {
            method: 'DELETE',
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(image)
        });
    }


    return (
        <Card>
            <Row>
                {images ? images.map((image) => {
                    return (
                        <Col lg={4}>
                            <Card.Img variant="top" src={image.url} style={{ height: `300px` }} />
                            <Card.Body>
                                <Card.Title>{image.description}</Card.Title>
                                <Button variant="primary" onClick={() => handleDelete(image)}>DELETE</Button>
                            </Card.Body>

                        </Col>
                    )
                })

                    : null}
            </Row>
        </Card>
    )
}

export default ImageBoard;