import '../App.css'
import React from "react";
import img from '../assets/images/Layer 40 (1).png';
import img1 from '../assets/images/Layer 41 (1).png';
import img2 from '../assets/images/Layer 42 (1).png';
import img3 from '../assets/images/Layer 43 (1).png';

class Blog extends React.Component{
    render(){
        
        return<section class="parent-best-prints">
        <div class="container">
            <div>
                <h3 class="head-best">Best Selling Prints</h3>
            </div>
            <div class="row">
                <i class="fa fa-angle-left left-arr"></i>
                <div class="col-lg-3 col-sm-6 col-xs-12">

                    <div class="img-div">
                        <img class="layer-card" src={img}></img>
                    </div>
                    <div class="lorem-div-1">
                        <p class="lorem-doll">Lorem ipsum dolor</p>
                        <p class="para-120">$120.00</p>
                        <div>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="img-div">
                        <img class="layer-card" src={img1}></img>
                    </div>
                    <div class="lorem-div-2">
                        <p class="lorem-doll">Lorem ipsum dolor</p>
                        <p class="para-120">$120.00</p>
                        <div>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="img-div">
                        <img class="layer-card" src={img2}></img>
                    </div>
                    <div class="lorem-div-3">
                        <p class="lorem-doll">Lorem ipsum dolor</p>
                        <p class="para-120">$120.00</p>
                        <div>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div class="img-div">
                        <img class="layer-card" src={img3}></img>
                    </div>
                    <i class="fa fa-angle-right right-arr"></i>
                    <div class="right-mar">
                        <p class="lorem-doll">Lorem ipsum dolor</p>
                        <p class="para-120">$120.00</p>
                        <div >
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        
    }
}

export default Blog;