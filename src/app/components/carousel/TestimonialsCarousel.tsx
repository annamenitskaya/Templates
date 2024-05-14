'use client'

import React from 'react'
import Carousel, { CarouselInternalState } from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

interface CustomCarouselProps {
    children: any;
}
interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
    carouselState: CarouselInternalState;
}

const TestimonialsCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, carouselState }) => {
        const { currentSlide, totalItems } = carouselState;

        return (
            <div className="carousel-button-group" style={{ 'display': 'flex', 'alignItems': 'center' }}>
                <div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}><img src="/arrow-left.svg" alt="Left Arrow" /></div>
                <div>{currentSlide + 1}/{totalItems}</div>
                <div onClick={() => next()}><img src="/arrow-right.svg" alt="Right Arrow" /></div>
            </div>
        );
    };

    return (
        // @ts-ignore
        <Carousel responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroup />} arrows={false}>
            {React.Children.map(children, (child, index) => (
                <div key={index}>{child}</div>
            ))}
        </Carousel>
    )
}
export default TestimonialsCarousel

