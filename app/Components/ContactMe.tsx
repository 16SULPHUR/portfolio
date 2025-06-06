'use client';
import React, { useState } from "react";


const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleButtonClick = (e:any) => {
        e.preventDefault()
        // Clear input fields
        setEmail("");
        setMessage("");
        alert("I WILL GET BACK TO YOU SOON...")
    };

    return (
        <>

            <section className="text-gray-600 body-font relative sm:mx-20 sm:my-16 shadow-2xl">
                <div className="absolute inset-0 bg-gray-300 sm:block hidden">
                    <iframe style={{ "filter": "grayscale(-1.9) contrast(1.2) opacity(0.4)" }} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14883.314352667114!2d72.875017!3d21.1592188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f25a7dbf5af%3A0x1f2cee5f3254a480!2sVariety%20Heaven!5e0!3m2!1sen!2sin!4v1705509894032!5m2!1sen!2sin " width="100%" height="100%"></iframe>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14883.314352667114!2d72.875017!3d21.1592188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f25a7dbf5af%3A0x1f2cee5f3254a480!2sVariety%20Heaven!5e0!3m2!1sen!2sin!4v1705509894032!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-xl shadow-purple-600/[.2]">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact me</h2>
                        <p className="leading-relaxed mb-5 text-gray-600"></p>
                        <form onSubmit={handleButtonClick}>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                            <button
                                type="submit"

                                className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-md w-full"
                            >
                                Button
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3"></p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactMe