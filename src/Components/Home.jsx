import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SlideImage from "./SlideImage";
import GridImage from "./GridImage";
import { useEffect, useState } from "react";

function Home() {
  let [videosArray, setVideosArray] = useState([]);
  let [favVideosArray, setFavVideosArray] = useState([]);
  let [isFavVideos, setIsFavVideos] = useState(false);

  let favButtonOff = { color: "black", backgroundColor: "#80808065" };
  let favButtonOn = { color: "white", backgroundColor: "#0091ff" };
  useEffect(() => {
    fetch("https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/")
      .then((raw_data) => raw_data.json())
      .then((data) => {
        setVideosArray([...data.videosData]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homepage">
      <div className="homepage_slides">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay
        >
          <SwiperSlide>
            <SlideImage
              image_path="image1.jpg"
              image_text="Diagnosis and monitoring of airway diseases in the era of social distancing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage
              image_path="image2.jpg"
              image_text="Advancing Telemedicine for Chronic Disease Management in a Post-Pandemic World"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage
              image_path="image3.jpg"
              image_text="Innovative Approaches to Remote Patient Monitoring in Respiratory Health"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button
        className="fav_button"
        style={isFavVideos ? favButtonOn : favButtonOff}
        onClick={() => setIsFavVideos((prev) => !prev)}
      >
        Favourites
      </button>
      <div className="homepage_grid">
        {isFavVideos
          ? favVideosArray.map((video) => (
              <GridImage
                key={video.title}
                title={video.title}
                description={video.description}
                thumbnailUrl={video.thumbnailUrl}
                videoLink={video.videolink}
                setFavVideosArray={setFavVideosArray}
                videosArray={videosArray}
                favVideosArray={favVideosArray}
              />
            ))
          : videosArray.map((video) => (
              <GridImage
                key={video.title}
                title={video.title}
                description={video.description}
                thumbnailUrl={video.thumbnailUrl}
                videoLink={video.videolink}
                setFavVideosArray={setFavVideosArray}
                videosArray={videosArray}
                favVideosArray={favVideosArray}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
