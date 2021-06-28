import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import './ScrollingDiv.css'


function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../assets/landscapes/', false, /\.(png|jpe?g|svg)$/));

const pic = [1,2,3,4,5,6,7,8,9,10]

console.log(pic.length)


window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = window.pageXOffset + 'px';
    console.log(window.pageXOffset)
    console.log(document.getElementById('showScroll').innerHTML)
  });

const scrollingDiv = () => {

    return (
        <div className='scrolling'>

            <ScrollMenu
                inertiaScrolling={true}
                inertiaScrollingSlowdown={0.01}
                transition={0.01}
                scrollBy={1}
                arrowLeft={<div style={{ fontSize: "30px" }}>{"  "}</div>}
                arrowRight={<div style={{ fontSize: "30px" }}>{"  "}</div>}
                data={pic.map((item,i) => {
                    return ( 
                        <img
                        className='scrolling-img'
                        alt={item}
                        src={images[i].default}
                        key={item}
                        />
                    )})}
            />
        </div>
    )
}

export default scrollingDiv