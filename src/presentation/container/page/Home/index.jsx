// dummy
// import dataProduct from "./dummy/dataProduct";

import { useState } from "react";

import useFetch from "core/hooks/useFetch";

// -- component
import Default from "presentation/component/template/Default";
import SectionQuoteCard from "presentation/component/organism/SectionQuoteCard";
import SectionPostCard from "presentation/component/organism/SectionPostCard";

// -- widget
import WidgetProduct from "infrastructure/widget/WidgetProduct";

// carousel slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- Datepicker
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  // const [dataNewProduct, setDataNewProduct] = useState([]);
  // const [dataQuotes, setDataQuotes] = useState([]);
  // const [dataPosts, setDataPosts] = useState([]);

  const { data: getDataQuotes } = useFetch("https://dummyjson.com/quotes");
  const { data: getDataPosts } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const dataQuotes = getDataQuotes.quotes !== undefined ? getDataQuotes.quotes : [];
  const dataPosts = getDataPosts.length !== undefined ? getDataPosts : [];

  // useEffect(() => {
  // fetch("https://x-api.alpha-x.id/v1/product")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setDataNewProduct(data.data);
  //   });
  // // -- API dataQuotes
  // fetch("https://dummyjson.com/quotes")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setDataQuotes(data.quotes);
  //   });
  // // -- API dataPost
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let dataTemp = [];
  //     // Transform Data (manipulasi key & data)
  //     data.forEach((val, idx) => {
  //       const valTemp = {
  //         id: val.id,
  //         userId: val.userId,
  //         title: val.title,
  //         description: val.body,
  //       };
  //       dataTemp.push(valTemp);
  //     });
  //     setDataPosts(dataTemp);
  //   });
  // }, []);

  const [startDate, setStartDate] = useState(new Date());

  const settings = {
    className: "carousel-section",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Default>
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="asset/img/dummy/dummy01.png" alt="dummy01.png" />
          <div className="carousel-text">
            <div className="container">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla.</h3>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="asset/img/dummy/dummy01.png" alt="dummy01.png" />
          <div className="carousel-text">
            <div className="container">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla.</h3>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="asset/img/dummy/dummy01.png" alt="dummy01.png" />
          <div className="carousel-text">
            <div className="container">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla.</h3>
            </div>
          </div>
        </div>
      </Slider>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <WidgetProduct />
      <SectionQuoteCard title="Quote Hari Ini" data={dataQuotes} />
      <SectionPostCard title="Berita Terupdate" data={dataPosts} />
      <div className="container">
        <h1>Home page</h1>
      </div>
    </Default>
  );
};

export default Home;
