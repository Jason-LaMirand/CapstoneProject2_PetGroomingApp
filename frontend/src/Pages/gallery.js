import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

import './gallery.css';

const items = [
    {
        src: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/07/dog-grooming-photography-fb2__700-png.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://dogspawaz.com/images/pic-before-after.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QlihK1_jeWhETry0joFL7DclxfMq4EoDSA&usqp=CAU',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
    {
        src: 'https://imgix.bustle.com/scary-mommy/2019/09/dog-makeover.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
        altText: 'Slide 4',
        caption: 'Slide 4',
        key: 4,
    },
];

function Gallery(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default Gallery;
