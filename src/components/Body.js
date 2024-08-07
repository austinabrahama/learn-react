import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [list, setList] = useState(resList);
    console.log('setList: ', setList);
    return (
        <div>
            <Header />

            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    let res = resList.filter(item => item.info.avgRatingString > 4.5 );
                    setList(res);
                }}>Filter Restaurant</button>
            </div>
            <div className="resCardContainer">
                {list.map((resData) => (
                    <RestaurantCard key={resData.info.id} resData={resData} />
                ))}
            </div>
        </div>
    );
};

export default Body;