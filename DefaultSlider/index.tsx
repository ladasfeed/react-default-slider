import React, {FC, ReactNode, useEffect, useRef, useState} from 'react'
import './style.css'

type DefaultSliderType = {
    slides: Array<ReactNode>
    type?: 'custom' | 'default' | 'imageSize',
    className?: string,
    controllerType?: 'arrow' | 'triangle';
}

let width = 0;

export const DefaultSlider:FC<DefaultSliderType> = (props) => {
    const {
        slides,
        type = 'imageSize',
        className = '',
        controllerType = 'arrow'
    } = props

    /* state */
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesOffset, setSlidesOffset] = useState(0)
    const wrapper = useRef<HTMLDivElement>(null)

    /* methods */
    const nextSlide = () => {
        const newSlide = currentSlide!==slides.length-1 ? currentSlide+1 : 0
        setCurrentSlide(newSlide)
        setSlidesOffset(-(newSlide)*width)
    }
    const prevSlide = () => {
        const newSlide = currentSlide!==0 ? currentSlide-1 : slides.length-1
        setCurrentSlide(newSlide)
        setSlidesOffset(-(newSlide)*width)
    }

    /* effects */
    useEffect(()=>{
        width = wrapper.current?.offsetWidth || 0;
    }, [])


    const classes = `
        DefaultSlider DefaultSlider--${type}
    `

    return (
        <div className={`${className}`}>
            <div className={classes} ref={wrapper}>
                <div className='DefaultSlider__slides'>
                    {
                        slides.map((item, index) => (
                            <div
                                style={{transform: `translateX(${slidesOffset}px)`}}
                                className='DefaultSlider__slide'
                                key={index}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div
                    onClick={nextSlide}
                    className={`DefaultSlider__slide-controller DefaultSlider__slide-controller--${controllerType}`}/>
                <div
                    onClick={prevSlide}
                    className={`DefaultSlider__slide-controller DefaultSlider__slide-controller--${controllerType}`}/>
            </div>
        </div>
    )
}