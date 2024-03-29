import React from "react";
import AddressMap from "./Map";

function Contactus() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="sm:text-xl text-indigo-600 font-semibold lg:text-3xl tracking-wide uppercase mt-8">Contact Us</h1>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Reach Us Anyway
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We are available from 8am-8pm (Mon-Sun)   
                    </p>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">Saharanpur Office</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">5, 1st Floor, Nagar Market Barola, Sec.-49, Near Sec. -76 Metro Station Noida

                        info@medicrov.in
                        (+91) 8279917442</p>
                    <hr className="mt-8" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex justify-center">
                    <AddressMap />
                </div>
            </div>
        </div>
    )
}
export default Contactus;
