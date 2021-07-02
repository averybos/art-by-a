import React, {useEffect, useRef} from 'react'
import './ScrollingDiv.css'
import LocomotiveScroll from 'locomotive-scroll'
import * as $ from 'jquery'
import mousewheel from 'jquery-mousewheel'

function importAll(r) {
    return r.keys().map(r)
}

const images = importAll(require.context('../../assets/landscapes/', false, /\.(png|jpe?g|svg)$/));

const pic = []

for (let i = 1; i <= images.length; i++) {
    pic.push(i)
}

// $(function() {

//     $("body").mousewheel(function(event, delta) {
 
//        this.scrollLeft -= (delta * 30);
     
//        event.preventDefault();
 
//     });
 
// });
const ScrollingDiv = () => {
    //let scrollRef = useRef(null)

    // useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector("#view"),
    //         smooth: true,
    //     })
    // }, [])
    // const div = document.querySelector('.outer-wrapper')
    // const inner_div = document.querySelector('.wrapper')
    // console.log(inner_div,document.querySelector('.wrapper'))


    let mouseWheelEvt = function (event) {
        console.log('here')
        if (document.body.doScroll)
            document.body.doScroll(event.wheelDelta>0?"left":"right");
        else if ((event.wheelDelta || event.detail) > 0) {
            console.log('here?')
            document.body.scrollLeft -= 10;
        }
        else {
            console.log('here??')
            document.body.scrollLeft += 10;
        }
        return false;
    }
    document.body.addEventListener("mousewheel", mouseWheelEvt, {passive:false});

    // const wheel = (e) => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     console.info('y' + e.deltaY)
    //     console.log(' ')
    //     const delta = e.deltaY
    //     if (e.target === document.querySelector('.scrolling-img')) {
    //         console.log('yes')
    //     }       
    //     else {
    //         console.log('no')
    //         console.log(e.target)
    //     }
    // }
    // const mouseMove = (e) => {
        
    //     e.preventDefault();
    //     e.stopPropagation();
    //     console.log('mousemove')
        
    //     const delta = e.deltaY;
        
    //     //const maxScrollY = inner_div.offsetHeight - div.offsetHeight;
    //     //const maxScrollX = inner_div.offsetWidth - div.offsetWidth;
        
    //     let scrollY = .scrollTop;
    //     let scrollX = div.scrollLeft;
        
    //     if (scrollX > 0) {
    //       scrollX += delta;
          
    //       if (scrollX < 0) {
    //         scrollY -= scrollX;
    //         scrollX = 0;
    //       }
    //     } else {
    //       scrollY += delta;
        
    //       //const overflow = scrollY - maxScrollY;
    //       //if (overflow > 0) {
    //         //scrollX += overflow;
    //         //scrollY = maxScrollY;
    //       //} else {
    //         scrollX = 0;
    //       //}
    //     }
        
    //     //div.scrollTo(scrollX, scrollY);
    // }

    return (
        
                <div className='wrapper'>
                    {pic.map((item,i) => {
                        return ( 
                            <img
                            className='scrolling-img'
                            alt={item}
                            src={images[i].default}
                            key={item}
                            />
                        )})}
                </div>
        
    )
}

// div.addEventListener('wheel', e => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     const delta = e.deltaY;
    
//     const maxScrollY = inner_div.offsetHeight - div.offsetHeight;
//     const maxScrollX = inner_div.offsetWidth - div.offsetWidth;
    
//     let scrollY = div.scrollTop;
//     let scrollX = div.scrollLeft;
    
//     if (scrollX > 0) {
//       scrollX += delta;
      
//       if (scrollX < 0) {
//         scrollY -= scrollX;
//         scrollX = 0;
//       }
//     } else {
//       scrollY += delta;
    
//       const overflow = scrollY - maxScrollY;
//       if (overflow > 0) {
//         scrollX += overflow;
//         scrollY = maxScrollY;
//       } else {
//         scrollX = 0;
//       }
//     }
    
//     div.scrollTo(scrollX, scrollY);
// })


export default ScrollingDiv