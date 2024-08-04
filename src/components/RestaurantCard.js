import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    let { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = props.resData.info;
    return (
        <div className="restaurantCard">
            <img alt="Logo" src={CDN_URL + cloudinaryImageId} />
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;