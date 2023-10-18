// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [mydata, setData] = useState([]);

//   const apiget = () => {
//     fetch('https://inshorts.me/news/all?offset=0&limit=21')
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setData(json.data.articles);
//       });
//   };

//   useEffect(() => {
//     apiget();
//     const interval = setInterval(() => {
//       apiget();
//     }, 500000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleArticleClick = (article) => {
//     // Handle the click event for the article title here
//     console.log('Clicked on article:', article.title);
//   };

//   return (
//     <Container fluid>
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {mydata.map((article, index) => (
//           <Col key={index}>
//             <div className="position-relative mb-3">
//               <img
//                 className="img-fluid w-100"
//                 src={article.imageurl}
//                 alt={article.title}
//                 style={{ objectFit: 'cover' }}
//               />
//               <div className="bg-white border border-top-0 p-4">
//                 <div className="mb-2">
//                   <a
//                     className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
//                     href=""
//                   >
//                     {article.category}
//                   </a>
//                   <a className="text-body" href="">
//                     <small>{article.date}</small>
//                   </a>
//                 </div>
//                 <a
//                   className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
//                   href=""
//                   onClick={() => handleArticleClick(article)}
//                   // Add a click event listener to the article title
//                 >
//                   {article.title}
//                 </a>
//                 <p className="m-0">{article.content}</p>
//               </div>
//               <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
//                 <div className="d-flex align-items-center">
//                   <img
//                     className="rounded-circle mr-2"
//                     src="img/user.jpg"
//                     width="25"
//                     height="25"
//                     alt=""
//                   />
//                   <small>{article.author}</small>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <small className="ml-3">
//                     <i className="far fa-eye mr-2"></i>
//                     {article.views}
//                   </small>
//                   <small className="ml-3">
//                     <i className="far fa-comment mr-2"></i>
//                     {article.comments}
//                   </small>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default App;
