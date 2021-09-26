import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import University from '../University/University';
import './HomePage.css'
const HomePage = () => {
            const [universities, setUniversities] = useState([]);
            const [cart, setCart] = useState([]);
            useEffect(() => {
                        fetch('./Universities.JSON')
                                    .then(res => res.json())
                                    .then(data => setUniversities(data))
            }, [])

            const handleAddToCart = (university) => {
                        const newCart = [...cart, university];
                        setCart(newCart)

            }

            return (
                        <div className="body-container">

                                    <div className="uni-component border-end mx-auto">

                                                {universities.map(university => <University
                                                            key={university.id}
                                                            university={university} handleAddToCart={handleAddToCart}></University>)}


                                    </div>

                                    <div className="cart-component mx-auto">
                                                <Cart cart={cart}></Cart>
                                    </div>
                        </div>
            );
};

export default HomePage;