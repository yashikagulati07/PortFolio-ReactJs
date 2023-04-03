import React from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import todo from "../../img/todo.png";
import stopwatch from "../../img/stopwatch.png";
import shopping from "../../img/shopping.png";
import portfolio from "../../img/portfolio.png";
import 'swiper/css';
import { useContext } from 'react';
import { themeContext } from '../../Context';
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="portfolio">
        {/* Heading */}
        <span style={{ color: darkMode ? 'white' : '' }}> Recent </span>
        <span> Projects  </span>
        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider">
          <SwiperSlide>
            <a href='https://github.com/yashikagulati07/StopWatch-JsProject' target="_blank">
              <img src={stopwatch} alt="" />
            </a>
            <p style={{ margin: '10%' }}> Simple JavaScript Project </p>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://github.com/yashikagulati07/TodoList-ReactJs' target="_blank">
              <img src={todo} alt="" />
            </a>
            <p style={{ margin: '10%' }}> Simple Todo List using React JS </p>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://github.com/yashikagulati07/PortFolio-ReactJs' target="_blank">
              <img src={portfolio} alt="" />
            </a>
            <p style={{ margin: '10%' }}> Portfolio Website using React JS </p>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://github.com/yashikagulati07/Ecommerce-NodeJs' target="_blank">
              <img src={shopping} alt="" />
            </a>
            <p style={{ margin: '10%' }}> Ecommerce Website using Node js and MongoDB</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Portfolio