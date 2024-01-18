import React from 'react';
import './pages/home.css';
import FaceSerum from './Components/Assets/Hyaluronic-Acid.jpeg';
import Niacinamide from './Components/Assets/niacinamide.png';
import Argireline from './Components/Assets/Argireline .jpeg';
import Glycolic from './Components/Assets/glycolic acid.jpeg';
import CosmeticMale from './Components/Assets/cosmetic-male-beauty-products-with-display.jpg';
import Cosmetologist from './Components/Assets/cosmetologist-doing-face-treatment-applying-face-mask.jpg';
import Beautician from './Components/Assets/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpg';
import Dropper from './Components/Assets/dropper.webp';
import SlideShow from './Components/SlideShow/SlideShow';

export default function Home() {
  return (
    <div>
     <section>
        <aside>
            <h2 className="shop_products">Shop our products</h2>
            <a href="https://theordinary.com/en-us/hyaluronic-acid-2-b5-serum-100425.html"><img className="products" src={FaceSerum} alt="face serum"></img></a>
            <a href="https://theordinary.com/en-us/niacinamide-10-zinc-1-serum-100436.html"><img className="products" src={Niacinamide} alt="niacinamide"></img></a>
            <a href="https://theordinary.com/en-us/argireline-solution-10-serum-100403.html"><img className="products" src={Argireline} alt="face serum"></img></a>
            <a href="https://theordinary.com/en-us/glycolic-acid-7-exfoliating-toner-100418.html"><img className="products" src={Glycolic} alt="glycolic"></img></a>
        </aside>
        <aside className="products_name">
            <p>Hyaluronic Acid Serum</p>
            <p>Niacinamide Serum</p>
            <p>Argireline Serum</p>
            <p className="Glycolic">Glycolic Acid Serum</p>
        </aside>
        <aside className="prices">
            <p>$8.90</p>
            <p>$6.00</p>
            <p>$9.40</p>
            <p className="price">$13.00</p>
        </aside>
    </section>
    <section className="Display">
        <img className="Aside_Pic" src={CosmeticMale} alt="display bottles"></img>
        <div>
            <p className="about">More about our brand</p>
            <p className="text_aside">OUR PRODCUTS ARE 100% CRUELTY-FREE WE NEVER TEST OUR PRODUCTS OR INGREDIENTS ON ANIMALS </p>
        </div>
    </section>
    <SlideShow/>
    <section>
        <div className="spaName">
            <p className="service">Whispering Waters Spa</p>
            <p>Gentle Glow Retreat</p>
        </div>
        <div className="spa">
            <p className="price1">$99/month</p>
            <p className="price2">$199/month</p>
        </div>
        <div className="spaPics">
            <img className="basicSpa" src={Cosmetologist} alt="woman getting facial message with brush"></img>
            <img className="advancedSpa" src={Beautician} alt="woman getting a facial massage"></img>
        </div>
        <div className="purple">
            <p className="product">ALL PRODUCTS ARE THOUGHTFULLY FORMULATED TO BE SAFE AND FREE FROM OVER 1,300 HARMFUL SUBSTANCES YOU DON'T WANT ON YOUR SKIN OR BODY</p>
            <img className="purpleBottle"  src={Dropper} alt="skin care products"></img>
        </div> 
      </section>
    </div>

  )
}
