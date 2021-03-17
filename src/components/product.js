import React, { Component } from 'react';
import cabbage from '../images/4.png'
import palak from '../images/3.png'
import tomato from '../images/2.png'
import bokchoy from '../images/1.png'
import bokchoy5 from '../images/5.png'
import bokchoy6 from '../images/lettus.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {BiRupee} from 'react-icons/bi';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenttop: [
                {
                    id: 1,
                    productName: 'BINGE BOX (Monthly Subscription)',
                    price: '1400',
                    disc: "The monthly subscription includes four Binge Boxes of 400 gms each to serve your weekly greens. They are delivered to you in an airtight BPA-free container, which is rotated on the next delivery. What's inside - 4/5 types of Lettuce, 3 types of Basil, fresh Herbs like Thyme/Parsley, Microgreens, Cherry Tomatoes & Surprise elements fresh from the farm !",
                    image: bokchoy5,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20BINGE%20BOX%20(Monthly%20Subscription)'
                },
                {
                    id: 2,
                    productName: 'MINI BINGE BOX (Monthly Subscription)',
                    price: '900',
                    disc: "The monthly subscription includes four Binge Boxes of 200 gms each to serve your weekly greens. They are delivered to you in an airtight BPA-free container, which is rotated on the next delivery. What's inside - 4/5 types of Lettuce, 3 types of Basil, fresh Herbs like Thyme/Parsley, Microgreens, Cherry Tomatoes & Surprise elements fresh from the farm !",
                    image: bokchoy5,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20MINI%20BINGE%20BOX%20(Monthly%20Subscription)'
                },
                {
                    id: 3,
                    productName: 'Mix Story Box',
                    price: '300',
                    disc: "Hand-packed Box of 200 gms freshly harvested mix veggies. What's inside - 4/5 types of Lettuce, 3 types of Basil, fresh Herbs, Kale, Chard, Pak choy, Cherry Tomatoes and some surprise elements, COD with free home delivery.",
                    image: bokchoy,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20Mix%20Story%20Box'
                },
                {
                    id: 4,
                    productName: 'Lettuce Munch',
                    price: '300',
                    disc: "Hand-packed Box of 250 gms of mix Lettuce. what's inside - 4/5 types of Lettuce including Summer Crisp, Lollo Rosso, Locarna, Romaine, Oak Mix.",
                    image: bokchoy6,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20Lettuce%20Munch'
                },
                {
                    id: 5,
                    productName: 'Basil Mania',
                    price: '100',
                    disc: "Hand-packed Box of 50 gms colorful, aromatic, and refreshing mixed Basil. What's inside - Italian Basil, Lemon Basil, Purple Basil",
                    image: palak,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20Basil%20Mania'
                },
                {
                    id: 6,
                    productName: 'Cherry Tomato Delight',
                    price: '80',
                    disc: "Hand-packed Box of 200 gms juicy and tasty cherry tomatoes fresh from the farm.",
                    image: cabbage,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20Cherry%20Tomato%20Delight'
                },
                {
                    id: 7,
                    productName: 'Micro Delight',
                    price: '80',
                    disc: '25 gms of freshly harvested microgreens of various varieties like White Radish, Pink Radish, Purple Radish, Arugula, Pakchoi, Sunflower, Amaranth, Chia.',
                    image: tomato,
                    onclick: 'https://api.whatsapp.com/send?phone=919316233486&text=Hi,%20I%20Would%20Like%20to%20order%20Micro%20Delight%20Box'
                },
            ]
        }
    }

    render() {
        return (
            <div className="product container">
                <h2>Fresh From The Farm</h2>
                {
                    this.state.contenttop.map((data,index) => (
                        <div className="product-box" key={index}>
                            <div className="product-detail">
                                <div className="price-name">
                                    <h2>{data.productName}</h2>
                                    {/* <h3>₹ {data.price}</h3> */}
                                </div>
                                <p>{data.disc}</p>
                                <button
                                    onClick={() => {
                                        window.open(data.onclick);
                                    }}
                                >Order Now
                            <WhatsAppIcon style={{ color: "white", fontSize: 30 }} />
                                </button>
                            </div>
                            <div className="product-img">
                                <h3><BiRupee/> {data.price}</h3>
                                <img src={data.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Product;