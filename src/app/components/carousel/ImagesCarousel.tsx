'use client'

import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CustomCarouselProps {
    children: any;
}

const ImagesCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 20
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            partialVisibilityGutter: 80
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 80
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive} infinite={true} partialVisible={true} >
            {React.Children.map(children, (child, index) => (
                <div key={index}>{child}</div>
            ))}
        </Carousel>
    )
}
export default ImagesCarousel

