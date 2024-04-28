import React, { useState } from 'react'
import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";


const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        ];
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () =>{
        setCurrentSlide(currentSlide===0? 2: currentSlide-1)
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide===2? 0: currentSlide+1)
    }
  return (
    <div>
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${100*currentSlide}vw)`}}>
                <img src={data[0]} alt="slider 1st image" />
                <img src={data[1]} alt="slider 2nd image" />
                <img src={data[2]} alt="slider 3th image" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider