import React from 'react'
import './ScrollingDiv.css'

import HorizontalScroll from 'react-scroll-horizontal'

function importAll(r) {
    return r.keys().map(r)
}

const images = importAll(require.context('../../assets/landscapes/', false, /\.(png|jpe?g|svg)$/));

const pic = []

for (let i = 1; i <= images.length; i++) {
    pic.push(i)
}

const ScrollingDiv = () => {

    return (
        <div className='wrapper'>
            <HorizontalScroll style={{overflow: 'visible'}}>
                {pic.map((item,i) => {
                    return ( 
                        <img
                        className='scrolling-img'
                        alt={item}
                        src={images[i].default}
                        key={item}
                        />
                    )})}
            </HorizontalScroll>     
        </div>
    )
}

export default ScrollingDiv