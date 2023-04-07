import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'

const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]

const Banner = () => {
  return (
    <span>
        <Carousel 
        className='carasousel'
        autoPlay= {true}
        animation ='slide'
        indicators= {false}
        navButtonsAlwaysVisible= {true}
        cycleNavigation= {true}
        navButtonsProps= {{
            style:{
                backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(178, 117, 4))",
                height: "102px",
                color: "black",
                borderRadius: 0
            }
        }}
    >
    {
        data.map((imag, i)=> (
            <img key={i} src= {imag} className="image" alt='https://unsplash.com/photos/hED6zg6YaEU'/>
        ))
    }
      
    </Carousel>
    </span>
  )
}

export default Banner
