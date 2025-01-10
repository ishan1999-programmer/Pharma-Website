function GridImage({title,description,thumbnailUrl , videoLink}){
    return(
    <div className="grid_image_box">
        <div className="grid_image_overlay">
            <p>{title}</p>
            <div className="heart"><img src="heart_white.png" alt="" /></div>
        </div>
        <div className="grid_image"><img src={thumbnailUrl} alt="" /></div>
    </div>
    );
}

export default GridImage;