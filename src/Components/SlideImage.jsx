function SlideImage({ image_path }) {
  return (
    <div className="slide_image_box">
      <div className="slide_image_overlay">
        <h1>
          Innovative Approaches to Remote Patient Monitoring in Respiratory
          Health
        </h1>
        <button type="button">Watch Now</button>
      </div>
      <div className="slide_image">
        <img src={image_path} alt="" />
      </div>
    </div>
  );
}

export default SlideImage;
