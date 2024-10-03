import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
       fetchData();
    }, []);

    const fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8438835&lng=80.05973639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        let json = await data.json();
        let resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(resData);
        setFilteredResList(resData);
    }

    return (
        // resList.length === 0 ? <Shimmer /> :
        <div>
            <Header />
            <div className="filter">
                <input type="text" onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                    let res = resList.filter(item => {
                        return item.info.name.toLowerCase().includes(searchText.toLowerCase()); 
                    });
                    setFilteredResList(res);
                }}>Search</button>

                <button className="filter-btn" onClick={() => {
                    let res = resList.filter(item => item.info.avgRatingString > 4 );
                    setFilteredResList(res);
                }}>Filter Restaurant</button>
            </div>

            <div className="resCardContainer">
                {filteredResList.map((resData) => (
                    <RestaurantCard key={resData.info.id} resData={resData} />
                ))}
            </div>
        </div>
    );
};

export default Body;