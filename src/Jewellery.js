import React from "react";
import '../App.css';
import img from "../assets/images/Layer 20.png";


class Jewellery extends React.Component{
    render(){

        return<section>
        <div class="par-rel">
            <img class="canvas-img" src={img}></img>
            <div class="canvas-div">
                <p class="canvas-para" id="canvas-para">Canvas Art Paintings</p>
                <button class="btn-brow">Shop Now</button>
            </div>
            <div class="circl-25-div">
                <p class="para-25">25%</p>
                <p class="para-of">off</p>
            </div>
        </div>
    </section>
    }
}

export default Jewellery ;