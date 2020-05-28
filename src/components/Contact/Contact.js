import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contactArea pageMarsing">
            <div className="container">
                <div className="row">
                    <article >
                        <h2 className="">Why You Contact Me?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora voluptates quam, aliquid at fuga iste nobis dolores. Enim pariatur autem assumenda, doloremque tempore omnis quidem, ipsa alias officiis vel, itaque nisi reprehenderit accusamus ut! Dolores molestiae unde quod quos distinctio est nemo molestias dolorum, sapiente, commodi, qui pariatur ex?</p>

                    </article>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <section className="contactForm">
                            <form action="" >
                                <fieldset>
                                    <legend><h3>Contact By Form</h3></legend>
                                    <div className="name formItem">
                                        <label htmlFor=""><span>Full Name</span><span>:</span></label>
                                        <input type="text" required/>
                                    </div>
                                    <div className="phone formItem">
                                        <label htmlFor=""><span>Phone Number</span><span>:</span></label>
                                        <input type="number" required/>

                                    </div>
                                    <div className="email formItem">
                                        <label htmlFor=""><span>Email ID</span><span>:</span></label>
                                        <input type="email" required/>
                                    </div>
                                    <div className="address formItem">
                                        <label htmlFor=""><span>Present Address</span><span>:</span></label>
                                        <input type="text" required/>
                                    </div>
                                    <div className="resone ">
                                        <label htmlFor="">Causes of Contact<span> :</span></label><br/>
                                        <textarea name="" id="" cols="30" rows="10">

                                        </textarea>
                                    </div>
                                    <input type="submit" value="Submit"/>
                                    <input type="reset" value="Reset"/>
                                </fieldset>
                            </form>
                        </section>
                    </div>
                    <div className="col-md-1">
                        <div className="verticalBorder"></div>
                    </div>
                    <div className="col-md-4">
                        <aside className="contactInfo">
                            <h3>Contact Information</h3>
                            <div >
                                <p><b>Phone Number: </b> 01863934966</p>
                                <p><b>Email:</b> ariful4966@gmail.com</p>
                                <address>
                                   <b>Permanent Address:</b><br/>
                                    Village:-Bohorkathi,
                                    Post: Hostisunda,
                                    PS: Wazirpur,
                                    Dist: Borisal,
                                    Zip Code: 8224,
                                    Country: Bangladesh

                                </address>
                            </div>
                            
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;