function GridImage({
  title,
  description,
  thumbnailUrl,
  videoLink,
  setFavVideosArray,
  videosArray,
  favVideosArray,
}) {
  function addTofav(title) {
    let new_video = videosArray.find((val) => val.title === title);
    setFavVideosArray((prev) => [...prev, new_video]);
  }

  function removeFromFav(title) {
    setFavVideosArray((prev) => prev.filter((val) => val.title != title));
  }

  return (
    <div className="grid_image_box">
      <div className="grid_image_overlay">
        <p>{title}</p>
        <button
          className="heart"
          onClick={() => {
            if (favVideosArray.some((val) => val.title === title)) {
              removeFromFav(title);
            } else {
              addTofav(title);
            }
          }}
        >
          <img
            src={
              favVideosArray.some((val) => val.title === title)
                ? "heart_red.png"
                : "heart_white.png"
            }
            alt=""
          />
        </button>
      </div>
      <div className="grid_image">
        <img src={thumbnailUrl} alt="" />
      </div>
    </div>
  );
}

export default GridImage;
