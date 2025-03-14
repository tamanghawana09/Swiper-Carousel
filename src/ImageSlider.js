import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./ImageSlider.css"; 

const ImageSlider = ({images}) => {

    const SwiperSettings = {
        modules: [Navigation, Pagination, Autoplay],
        dots: true,
        infinite: true,
        speed: 500,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        autoplay: { delay: 3000 },
        loop: true,
    };

  return (
    <div className="image-slider">
        <Swiper {...SwiperSettings}>
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
};

export default ImageSlider;
