import React from "react";
import {BiRupee} from 'react-icons/bi';

const About = () => {
    return (
        <>
            <section className="about container">
                <h2>About Us</h2>
                <p><b>HerbShire</b> is Surat’s first Indoor farm with the aim of providing daily greens <spam>‘Fresh From The Farm’</spam> to everybody.</p>
                <p>We are serving freshly produced hand-harvested leafy veggies of many varieties like lettuce, basil, kale, microgreens, and many more, grown indoor with zero pesticide. These veggies are organic and highly nutritious, and are used in various everyday dishes including salads, smoothies, sandwiches, wraps, etc</p>
                <p><b>Let us add Greens to our daily lives.</b></p>
                <div className="subscripition">
                    <h2>GET SUBSCRIPTION NOW!</h2>
                    <h3><BiRupee/> 1400/month</h3>
                </div>
            </section>
        </>
    )
}

export default About;