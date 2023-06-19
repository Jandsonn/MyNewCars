"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {

    }


    return (
        <div className="hero">
            <div className="flex-1 pt-36  padding-x">
                <h1 className="hero__title">
                    Find, book, or rent a car - quickly and easily!
                </h1>

                <p className='hero__subtitle'>
                    Stream Line your car rental
                    experience with our effortles booking process.
                </p>



        <CustomButton
            title="Explorer Cars"
            containerStyles="bg-primary-blue
            text-white rounded-full mt-10"
            handleClick={handleScroll}
        />
            </div>
        </div>
    )
}

export default Hero