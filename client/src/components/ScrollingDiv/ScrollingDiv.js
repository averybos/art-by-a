import React from 'react'
import './ScrollingDiv.css'
import ShowDescription from '../ShowDescription/ShowDescription'
import HorizontalScroll from 'react-scroll-horizontal'

function importAll(r) {
    return r.keys().map(r)
}

const images = importAll(require.context('../../assets/landscapes/', false, /\.(png|jpe?g|svg)$/));

const pic = []
const art_with_descriptions = {art: [], description: []}

for (let i = 1; i < images.length; i++) {
    pic.push(i)
    art_with_descriptions.art.push(images[i].default)
    art_with_descriptions.description.push('This is picture number ' + i)
}

let pressed = false
const clicked = () => {
    pressed = !pressed
}

const ScrollingDiv = () => {

    return (
        <div className='wrapper'>
            <HorizontalScroll 
                style={{overflow: 'visible'}}
                reverseScroll={true}
            >
                {art_with_descriptions.art.map((item,i) => {
                    return ( 
                        <div className='container'>
                            <img
                                className='scrolling-img'
                                alt={item}
                                src={item}
                                key={i}
                                onClick={clicked}
                            />
                            <ShowDescription description={art_with_descriptions.description[i]}
                                    styling='description-visible'
                                    p_styling='paragraph'/>
                        </div>
                    )})}
            </HorizontalScroll>     
        </div>
    )
}

export default ScrollingDiv