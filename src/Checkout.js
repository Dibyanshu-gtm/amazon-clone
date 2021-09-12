import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import CurrencyFormat from 'react-currency-format';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div class="checkout_left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is Empty </h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))

                        }
                    </div>
                )}
            </div>
            {basket.length > 0 && (<div class="checkout_right">
                <SubTotal />
            </div>)}



        </div>
    )
}

export default Checkout;
