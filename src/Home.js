import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home_row">
                <Product
                    id="12"
                    title="Apple iMac with Retina 5K Display (27-inch/68.58 cm, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silver"
                    price={169900.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41k91d0EYfL._AC_SY200_.jpg"
                />
                <Product
                    id="13"
                    title="Amazon Brand - Solimo Biela Single Seater Fabric Recliner"
                    price={16990.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91mhxYGkF5L._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="14"
                    title="Michael Kors
                    Lexington Analog Black Dial Men's Watch - MK8603"
                    price={19999.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81sqseMo7hL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="15"
                    title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
                    price={29999.00}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                    id="16"
                    title="Nike
                    Men's Jordan One Take Ii Pf Basketball Shoe"
                    price={7995.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51aOAJ5be0S._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="17"
                    title="Sony Bravia 215 cm (85 Inches) 4K Ultra HD Smart LED Google TV KD-85X85J (Black) (2021 Model) | with Alexa Compatibility"
                    price={474990.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81mxentP+bS._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;
