import React from "react";
import { Carousel } from "react-bootstrap";
import homeslider1 from '../images/home slider2.png';
import homeslider2 from '../images/home slider3.png';
import homeslider3 from '../images/home slider1.png';
import deliver from '../images/Group 33505.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Product from "../components/product";
import About from "../components/about";
import Footer from "../components/footer";
import Recipe from "../components/recipe";


const Landing = () => {

    return (
        <>
            <section className="herb-landing">
                <div className="herb-imgslider">
                    {/* <img src={homeslider1} alt="" /> */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                // className="d-block w-100"
                                src={homeslider1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>HerbShire</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                // className="d-block w-100"
                                src={homeslider2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>HerbShire</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                // className="d-block w-100"
                                src={homeslider3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>HerbShire</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="social-att">
                    <div className="box-social" onClick={() => { window.open("https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20some%20greens.", "_blank") }}>
                        <WhatsAppIcon style={{ color: "green", fontSize: 40 }} />
                        <h2>+91 93162 33486</h2>
                    </div>
                    <div className="box-social" onClick={() => { window.open("https://www.instagram.com/herb.shire/", "_blank") }}>
                        <InstagramIcon style={{ color: "#d6249f", fontSize: 40 }} />
                        <h2>herb.shire</h2>
                    </div>
                </div>
                <div className="your-box">
                    <div>
                        <img src={deliver} alt="" />
                    </div>
                    <div className="message">
                        <h2>It's not just a subscription of veggies, it's a subscription of your health.</h2>
                        <div className="note">
                            {/* <input type="number" placeholder="Phone Number" /> */}
                            <button onClick={() => { window.open("https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20BINGE%20BOX%20(Monthly%20Subscription)", "_blank") }}>Subscribe Now</button>
                        </div>
                    </div>
                </div>
                <Product />
                <div className="todayrecipes container">
                    <h4>Today’s Recipes</h4>
                    <Recipe />
                </div>
                <About />
                <Footer />
            </section>
        </>
    );
};

export default Landing;