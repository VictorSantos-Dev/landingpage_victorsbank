// import React from 'react'
import './Shopping.css'
import ReactCardSlider from 'react-card-slider-component';

import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.png"
import banner3 from "../../assets/banner3.png"

const Shopping = () => {
    // const sliderClick = ()=>{
    //     alert("hello world");
    //     //Adicionar o código abaixo na const "slides" para uma eventual função de click
    //     //clickEvent:sliderClick
    // }

    const slides = [
        {image: banner1},
        {image: banner2},
        {image: banner3},
    ]

    return (
        <div className="shopping">
            <ReactCardSlider slides={slides}/>
        </div>
    )
}

export default Shopping