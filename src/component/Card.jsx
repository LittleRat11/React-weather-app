import React from 'react'
import { BsArrowUpRightCircle, BsFillCloudFill } from 'react-icons/bs'
const Card = ({data}) => {
    // console.log(data)
    if(JSON.stringify(data) !== '{}') {
       
        return (
            <div className='d-flex justify-content-center gap-2 align-items-center flex-column'>
               
                <h2>{data.name}, {data.sys.country}</h2>
                <h1 className='d-flex justify-content-center align-items-center gap-3'>
               <img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`}/>{data.main.temp}°C
                </h1>
                <p className="text-md d-flex align-items-center gap-2">
                    
                    {data.weather[0].main}
                </p>
                <p>
                    Humidity: {data.main.humidity}%
                </p>
                <p>
                Visibility: {+data.visibility/1000}   km
                </p>
            </div>
          )
    }else{
        return(
            <h2>Loading ...</h2>
        )
    }
  
}

export default Card
