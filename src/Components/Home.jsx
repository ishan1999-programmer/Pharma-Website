import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SlideImage from "./SlideImage";
import GridImage from "./GridImage"
import { useEffect, useState } from "react";


function Home() {
    let [videosArray, setVideosArray] = useState([]);
    useEffect(()=>{
        fetch("https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/").then((raw_data)=>raw_data.json()).then((data)=>{
            setVideosArray([...data.videosData])
        }).catch((error)=>console.log(error)
        )
    },[]);
    
    
  return (
    <div className="homepage">
      <div className="homepage_slides">
        <Swiper modules={[Navigation, Autoplay]} slidesPerView={1} navigation autoplay>
          <SwiperSlide>
            <SlideImage image_path = "image1.jpg" image_text = "Diagnosis and monitoring of airway diseases in the era of social distancing" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage image_path = "image2.jpg" image_text = "Advancing Telemedicine for Chronic Disease Management in a Post-Pandemic World" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage image_path = "image3.jpg" image_text = "Innovative Approaches to Remote Patient Monitoring in Respiratory Health" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="homepage_grid">
        {videosArray.map((video,idx)=><GridImage key={idx} title= {video.title} description={video.description} thumbnailUrl = {video.thumbnailUrl} videoLink = {video.videolink}/>)}
      </div>
    </div>
  );
}

export default Home;
