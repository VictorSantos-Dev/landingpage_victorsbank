// import React from 'react'
import './Shopping.css'
import ReactCardSlider from 'react-card-slider-component';

const Shopping = () => {
    // const sliderClick = ()=>{
    //     alert("hello world");
    //     //Adicionar o código abaixo na const "slides" para uma eventual função de click
    //     //clickEvent:sliderClick
    // }

    const slides = [
        {image:"../../../src/assets/banner1.png"},
        {image:"../../../src/assets/banner2.png"},
        {image:"../../../src/assets/banner3.png"},
    ]

    return (
        <div className="shopping">
            <ReactCardSlider slides={slides}/>
        </div>
    )
}

export default Shopping