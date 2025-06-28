import RestaurantCard from "./RestaurantCard";
import RESTAURANTLIST from "./CONST";

const RestaurantComponent = () => {
    return (
        <div>
            <div className="resCardContainer">
                {RESTAURANTLIST.map((resData) => (
                    <RestaurantCard key={resData.info.id} resData={resData} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantComponent;