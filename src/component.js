// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';


const component = () => {
  return (
    <div>
  


    <div class="top-header">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-3 col-md-4">
                <div class="logo">
                    <a href="www.google.com">
                        <img src="img/logo.png" alt="Logo"/>
                    </a>
                </div>
            </div>
            <div class="col-lg-6 col-md-4">
                <div class="search">
                    <input type="text" placeholder="Search"/>
                    <button><i class="fa fa-search"></i></button>
                </div>
            </div>
            <div class="col-lg-3 col-md-4">
                <div class="social">
                    <a href="www.twitter.com"><i class="fab fa-twitter"></i></a>
                    <a href="www.facebook.com"><i class="fab fa-facebook"></i></a>
                    <a href="www.linkedin.com"><i class="fab fa-linkedin"></i></a>
                    <a href="www.instagram.com"><i class="fab fa-instagram"></i></a>
                    <a href="www.youtube.com"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>



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

    </div></div>
  )
}

export default component