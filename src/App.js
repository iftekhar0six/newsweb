import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import component from './component';

function App() {
  // Define state to hold the fetched data
  const [mydata, setData] = useState([]);

  // Function to fetch data from the API
  const apiget = () => {
    fetch('https://inshorts.me/news/all?offset=0&limit=21')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.articles);
      });
  };

  // useEffect to fetch data on component mount and at intervals
  useEffect(() => {
    // Initial data fetch
    apiget();

    // Set up an interval to fetch data every 500 seconds (or as needed)
    const interval = setInterval(() => {
      apiget();
    }, 500000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
      <Container fluid>
        <Row xs={1} md={3} className="g-4">
          {mydata.map((article, index) => (
            <Card key={index} className="news-card">
              <Card.Img variant="top" src={article.imageUrl} alt="News Image" height="275px" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
  );
}

export default App;
