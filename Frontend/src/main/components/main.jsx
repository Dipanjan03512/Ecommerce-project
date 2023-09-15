import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  return (
    <>
    <div >
    <Carousel fade={true} indicators={false} >
      <Carousel.Item interval={2500}  >
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/20-percent-off-discount-creative-composition-3d-sale-symbol-with-decorative-objects-sale-banner-poster_3482-8278.jpg?w=2000"
          alt="First slide"
          style={{height:"500px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://cdn0.desidime.com/topics/photos/1459426/original/39895494-fbb3-4b42-89b7-6fcfbc84761622221135.jpg?1658754701"
          alt="Second slide"
          style={{height:"500px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/cd4cd1b7-1f3c-4e10-b015-c4a52032cd87/image.png"
          alt="Third slide"
          style={{height:"500px"}}
        />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Fashion/May_ART/topbannersnew/MAY-ART-PC-47._V510265946_.jpg"
          alt="Third slide"
          style={{height:"500px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://marketplace.canva.com/EAFEGuur__0/1/0/1600w/canva-white-green-creative-summer-fashion-banner-v3Dej-sD4RQ.jpg"
          alt="Third slide"
          style={{height:"500px"}}
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
};

export default Home;