import '../App.css'
import React from "react";
import img from '../assets/images/testImg.png'

class Home extends React.Component{
    render(){
        
        return <div className="parent-sales">
            <img class="gift-pundit" src={img}></img>
        <div className="sale-upto">
            <span className="para-sales">Sale up to</span>
            <span className="para-off">50% off</span>
            <div className="parent-special">
                <div>
                    <p className="special-gift">Special Gifts Trend</p>
                </div>
                <div>
                    <p className="para-2020">2020</p>
                </div>
            </div>
            <div className="lorem-para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                <p>veniam, quis nostrud exercitation ullamco</p>
            </div>
            <div>
                <button className="shop-btn">Shop Now</button>
            </div>
        </div>
    </div>

        
    }
}

export default Home;