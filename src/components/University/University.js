import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './University.css'


const University = (props) => {

            //--------------------------------------------- object distructuring--------------------------------------------//

            const { name, img, cost, location, QSWRank, iStudents } = props.university;


            return (

                        <div className="card-group my-5 ms-5 ">
                                    <div className="card me-1 w-25 cart-border">
                                                <img src={img} className=" card-img-top w-25 mx-auto my-2" alt="..." />
                                                {/*------------------------------- card body------------------------ */}
                                                <div className="">
                                                            <h4 className="card-title title-style">{name}</h4>
                                                            <div className="card-text">
                                                                        <p>QS Global Rank: {QSWRank}</p>
                                                                        <span className="badge bg-light text-info text-wrap"> <p>International Students: {iStudents}</p>
                                                                                    <p>Total yearly Cost: ${cost}</p></span>
                                                                        <p>Location: {location}</p>

                                                            </div>
                                                </div>
                                                {/*------------------------------ card button------------------------ */}
                                                <div className="d-flex justify-content-around ">

                                                            <button className=" button my-2 py-1 px-4"> <FontAwesomeIcon icon={faArrowRight} />      Website</button>

                                                            <button onClick={() => props.handleAddToCart(props.university)} className=" button my-2 py-1 px-2"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
                                                </div>

                                    </div>
                        </div>


            );
};

export default University;


