import './App.css';
// import Animationcursor from "react-animated-cursor"
// import CustomCursor from 'custom-cursor-react';
// import { CursorProvider } from 'react-cursor-custom'
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Search from './components/search/Search';
import Forecast from './components/forecast/Forecast';
import 'bootstrap/dist/css/bootstrap.css';
import  Weather from './components/currentWeather/Weather';
import {weatherkey,weatherurl} from './components/search/Api';
import Loader from './components/Loader/Loader';
import { useState,useEffect} from 'react';
function App() {
  const [loading,setloading]=useState(false);
    useEffect(()=>
    {
     setloading(true)
     setTimeout(()=>{
     setloading(false);
     },5000)
    },[])
  const [weather,setweather]=useState(null);
  const [forcast,setforcast]=useState(null);
  const  handleOnchangeSearch=(searchdata)=>
  {
    const [lat,lon]=searchdata.value.split(" ");
    // const district=searchdata.label.split("");
    // const lat=40.7128;
    // const lon=-74.0060;
     console.log(lat);
     console.log(lon);
     //const Weatherurl=fetch(`${weatherurl}/weather?q=${district},IN&appid=${weatherkey}&units=metric`);
     const Weatherurl = fetch(
      `${weatherurl}/weather?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=metric`);
    const forcasturl=fetch(
      `${weatherurl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=metric`);
   Promise.all([Weatherurl,forcasturl])
   .then(async(res)=>{
    const weatherres=await res[0].json();
    const forcastres=await res[1].json();
    setweather({city:searchdata.label,...weatherres});
    setforcast({city:searchdata.label,...forcastres});
   })
   .catch((err)=>
     console.log("some error"+ err)
   )
   console.log(weather);
   console.log(forcast);
  }
  return (
    // <div className="container m-3 p-3 ">
    //   {/* <BrowserRouter>
    //    <Routes>
    //    <Route path='/' element={<App/>} ></Route>
    // </Routes>
    // </BrowserRouter> */}
    //  <Search onchangeSearch={handleOnchangeSearch}/>
    //  { Weather && <Weather data={weather}/>}
    //  {Forecast && <Forecast data={forcast}/>}
    // </div>

       <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Search onchangeSearch={handleOnchangeSearch} />
                    {weather && <Weather data={weather} />}
                    {forcast && <Forecast data={forcast} />}
                </div>
            )}
        </div>
    
  );
}


export default App;


