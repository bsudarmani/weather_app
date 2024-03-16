import { useState,useEffect } from "react";
// import PuffLoader from "react-spinners/PuffLoader";
import animation from '../../animation.json';
import Lottie from "lottie-react";
// import preloader from '../../icons/preloader2.gif';
import './Loader.css';
const Loader=()=>
{
    // const [loading,setloading]=useState(false);
    // useEffect(()=>
    // {
    //  setloading(true)
    //  setTimeout(()=>{
    //  setloading(false);
    //  },5000)
    // },[])
    return(
        <div>
     <div className="pre-loader-container">
      {/* <PuffLoader
        color={"#198957"}
        loading={loading}
        size={100}
        className='pre-loader'
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <div style={{ width: '1000px', height: '700px' }}> 
      <Lottie animationData={animation} style={{ width: '100%', height: '100%' }}
       size={100}
       className='pre-loader'
       aria-label="Loading Spinner"
       data-testid="loader" />
    </div>
    </div> 
  </div>
    )
}
export default  Loader;