import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import './slide.css'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({title ,dealProduct}) => {

  return (
    <div className="products_section">
      <div className="product_body">
        <h3>{title} </h3>
        <button className="view_btn">View All</button>
        {/* <hr /> */}
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {dealProduct.map((item, i) => (
            <Link to={`/getproductOne/${item.id}`}>
              <div className="products_items">
                <div className="product_img">
                  <img src={item.url} alt="product" />
                </div>
                <p className="products_name">{item.title.shortTitle}</p>
                <p className="products_offer" style={{ color: "#  007185" }}>
                  {item.discount}
                </p>
                <p className="products_explore">{item.tagline}</p>
              </div>
            </Link>
          ))}

          {/* <h1>Hello world</h1> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;
