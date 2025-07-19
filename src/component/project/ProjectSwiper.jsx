import { KqlProduct } from "../../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../project/projectSwiper.module.css";


const ProjectSwiper = () => {
  return (
    <div className={styles.KqlProduct}>
      <h1>My Projects</h1>
        <div className={styles.roundedLined}>
        <div className={styles.circle}></div>
        <hr className={styles.roundedLine} />
        <div className={styles.circle}></div>
      </div>

      <Swiper
        className={styles.swipper}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {KqlProduct.map((product) => (
          <SwiperSlide key={product.id} className={styles.swiperSlides}>
            <div className={styles.productCard}>
              <img
                className={styles.imgCard}
                src={product.image}
                alt={product.title}
              />
              <h2 className={styles.name}>{product.name}</h2>
              <h5 className={styles.description}>{product.description}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSwiper;
