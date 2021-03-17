import React from "react";
import cabbage from '../images/cabbage-min.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Product1 = () => {
    return (
        <>
            <section className="view-product container">
                <div className="product-img">
                    <img src={cabbage} alt="" />
                </div>
                <div className="product-price">
                    <div>
                        <h2>Cabbage</h2>
                        <p>In Stock</p>
                    </div>
                    <div>
                        <h2>₹ 12</h2>
                    </div>
                </div>
                <div className="calories">
                    <div className="box">
                        <div>
                            <h2>16</h2>
                            <p>Calories</p>
                        </div>
                        <div>
                            <h2>0.9 g</h2>
                            <p>Proteins</p>
                        </div>
                        <div>
                            <h2>0.1</h2>
                            <p>Fats</p>
                        </div>
                        <div>
                            <h2>3.1</h2>
                            <p>Carbs</p>
                        </div>
                    </div>
                </div>
                <div className="product-dis">
                    <p>Flower gardeners spend countless hours tilling and tending to the soil. This makes flower gardening appear hard work, and if it takes this much effort, then why would you consider growing plants in a hydroponic system</p>
                    <p>There are in fact several benefits and advantages flower gardening in hydroponics has over soil growing.</p>
                </div>
                <button>
                    Order Now
                    <WhatsAppIcon style={{ color: "white", fontSize: 40 }} />
                </button>
            </section>
        </>
    )
}

export default Product1;