import { useState } from "react";
import './Search.css'
import { AsyncPaginate } from "react-select-async-paginate";
import {url,geooptions} from './Api';
// import Toggle from "react-toggle";
import img from '../../icons/icons8-night-64.png'


const Search=({onchangeSearch})=>
{
 

    const [search,setsearch]=useState(null);
    // const [userLocation,setUserLocation]=useState(null);
    const handleChange=(searchdata)=>
    {
    setsearch(searchdata);
    onchangeSearch(searchdata);
    }
    const loadOptions = (inputValue) => {
      return fetch(
        `${url}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geooptions
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    };
    return(
      <>
      <div  className="search-box ">
        <div className=" search-bar">
       <p className="text-center text-light h3"><img src={img} alt=""></img>Weather</p>
      <AsyncPaginate
       style={{ backgroundColor: '#000',color:'#0d6efd'}}
      className="search-bar rounded-3"
      placeholder="Enter your city"
      debounceTimeout={(400)}
      value={(search)}
      onChange={handleChange}     
      loadOptions={loadOptions}
      />
      </div>
   </div>
   </>

    )
}
export default Search;
