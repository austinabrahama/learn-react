const RestaurantCard = (props) => {
    let { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = props.resData.info;
    return (
        <div className="restaurantCard">
            <img alt="Logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;