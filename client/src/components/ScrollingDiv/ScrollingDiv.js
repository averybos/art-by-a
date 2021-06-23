import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import './ScrollingDiv.css'
import l from '../../assets/landscapes/landscape1.jpeg'
import HorizontalScroll from 'react-scroll-horizontal'


const list = [
    { name: l },
  ];

const PictureItem = ({ text, selected }) => {
return (
    <div
    className="scrolling-pics"
    >
    {text}
    </div>
);
}

const Picture = (list) => list.map(el => {
    const { name } = el;
  
    return (
      <PictureItem
        text={name}
        key={name}
      />
    );
});

const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  
  
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const fillImages = () => {
    let imgs = []
    for (let i = 1; i <= 5; i ++) {
        let s = '../../assets/landscape'+i+'.jpeg'
        let img = <img className='scrolling-pics' src={s} alt={i} />
        imgs.push(img)
    }
    console.log(imgs)
    return imgs
}

let pics = fillImages()
console.log(pics)
const numberOfPicture = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
const items = [...Array(100)].map((val, i) => `Item ${i}`)

const scrollingDiv = () => {

    return (
        <div className='scrolling'>

            <ScrollMenu
                arrowLeft={<div style={{ fontSize: "30px" }}>{"  "}</div>}
                arrowRight={<div style={{ fontSize: "30px" }}>{"  "}</div>}
                data={numberOfPicture.map((picture, index) => (
                    <img
                    style={{ height: "100px" }}
                    alt="test"
                    src={l}
                    />
                ))}
            />
        </div>
    )
}

export default scrollingDiv