import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";

import ImageGallery from "../ImageGallery/ImageGallery";
import styles from "./AppContent.module.css";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [loadedImages, setLoadedImages] = useState(null);
  const [error, setError] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const imageLoadLimit = 20;

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get(
          `https://picsum.photos/v2/list?page=${pageNumber}&limit=${imageLoadLimit}`
        )
        .then((response) => {
          const sortedData = sortData(response.data);
          setData(sortedData);
          setLoading(false);
          setLoadedImages(sortedData.length);
        })
        .catch((error) => {
          setError(true);
          return error;
        });
    };
    fetchData();
  }, [pageNumber]);

  const sortData = (data) => {
    return data.sort((a, b) =>
      a.author.toLowerCase() > b.author.toLowerCase()
        ? 1
        : b.author.toLowerCase() > a.author.toLowerCase()
        ? -1
        : 0
    );
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    setPageNumber(pageNumber - 1);
  };

  if (error) {
    throw new Error("Ooops, something went wrong...");
  } else if (loading) {
    return "Loading...";
  } else {
    return (
      <div className={styles.wrapper}>
        <Container>
          <Row>
            <ImageGallery images={data} />
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-center">
              <div className={styles.pageNumber}>{`Page ${pageNumber}`}</div>
            </Col>
            <Col sm={12} className="my-4 d-flex justify-content-center">
              <Button
                className="custom-btn"
                disabled={pageNumber === 1}
                onClick={handlePrevious}
                size="sm"
              >
                Previous
              </Button>
              <Button
                className="custom-btn"
                disabled={loadedImages < imageLoadLimit}
                onClick={handleNext}
                size="sm"
              >
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default AppContent;
