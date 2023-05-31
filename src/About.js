import '../App.css'
import React from "react";
import img from '../assets/images/Layer 17 (1).png';
import img1 from '../assets/images/Layer 32 (1).png';
import img2 from '../assets/images/Layer 33 (1).png';
import img3 from '../assets/images/Layer 34 (1).png';
class About extends React.Component{
    render(){
        
        return<section className="parent-best-selling">
        <div className="container">
            <div>
                <h3 className="head-best">Best Selling Gifts</h3>
            </div>
            <div className="row">
                <i className="fa fa-angle-left angle"></i>
                <div className="col-lg-3 col-sm-6 col-xs-12">

                    <div className="img-div">
                        <img className="layer-cards" src={img} alt="teddy image"></img>
                    </div>
                    <div className="for-iphone">
                        <p className="lorem-dol">Lorem ipsum dolor</p>
                        <p className="para-120">$120.00</p>
                    </div>
                    <div className="for-iphone">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="img-div">
                        <img className="layer-card" src={img1} alt="teddy image"></img>
                    </div>
                    <div className="mar-para">
                        <p className="lorem-do">Lorem ipsum dolor</p>
                        <p className="para-120">$120.00</p>
                    </div>
                    <div className="mar-par">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="img-div">
                        <img className="layer-cards" src={img2} alt="teddy image"></img>
                    </div>
                    <div>
                        <p className="lorem-dol">Lorem ipsum dolor</p>
                        <p className="para-120">$120.00</p>
                    </div>
                    <div>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="img-div">
                        <img className="layer-card" src={img3} alt="teddy image"></img>
                    </div>
                    <i className="fa fa-angle-right right-ang"></i>
                    <div className="right-mar">
                        <p className="lorem-dol">Lorem ipsum dolor</p>
                        <p className="para-120">$120.00</p>
                    </div>
                    <div className="right-mar">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="best-tilt">Best Selling</h1>
            </div>
        </div>
    </section>

        
    }
}

export default About;