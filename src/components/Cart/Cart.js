import React from 'react';
import './Cart.css'
const Cart = (props) => {

            const { cart } = props;

            let numberOfUniversity = 0;
            let totalCost = 0;
            let name = "";
            const selectedUniversity = [];
            for (const university of cart) {
                        if (selectedUniversity.indexOf(university.id) === -1) {
                                    selectedUniversity.push(university.id)
                                    console.log(university)
                                    if (!university.count) {
                                                university.count = 1;
                                    }
                                    totalCost = totalCost + university.cost * university.count;
                                    numberOfUniversity = numberOfUniversity + university.count;
                                    if (name === "") {
                                                name = name + university.name;
                                    }
                                    else {
                                                name = name + ", " + university.name;
                                    }

                        }

            }

            console.log(selectedUniversity)





            return (
                        <div className="my-5">
                                    <div className="cart-container container py-2 px-4">
                                                <h1 className="text-white pt-2">Total Contribution</h1>
                                                <div className="text-style">
                                                            <p>Number of Institute:{numberOfUniversity}</p>
                                                            <p>Total Cost: ${totalCost}</p>

                                                </div>

                                    </div>

                                    <div className="badge bg-color text-wrap py-4 my-5">
                                                {name}
                                    </div>
                        </div >
            );
};

export default Cart;