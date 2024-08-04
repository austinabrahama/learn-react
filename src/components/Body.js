import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div>
            <Header />
            <div className="resCardContainer">
                {resList.map((resData) => (
                    <RestaurantCard key={resData.info.id} resData={resData} />
                ))}
            </div>
        </div>
    );
};

export default Body;