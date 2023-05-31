import React from "react";
import '../App.css';
import img from "../assets/images/Layer 38.png";
import img1 from "../assets/images/Layer 39.png";

class Personalised extends React.Component{
    render(){

        return <section>
        <div class="parent-digital">
            <img class="digital-img" src={img}></img>
            <div class="layer-39-div">
                <img class="layer-39-img" src={img1}></img>
            </div>
            <div class="circle-25-div">
                <p class="para-25">25%</p>
                <p class="para-of">off</p>
            </div>
            <div class="digital-printing">
                <p class="dig-para" id="dig-para">Digital Printing</p>
                <button class="btn-brown">Shop Now</button>
            </div>
        </div>
    </section>
    }
}

export default Personalised;