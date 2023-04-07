import React, { useEffect, useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './mobile.css'
import { Link } from 'react-router-dom';


const Mobile = () => {
    const [mobileData, setMobileData] = useState([])

    useEffect(()=> {
        getProducts()
    }, [])
    
    const getProducts = async () => {
        let result = await fetch('http://localhost:8000/mobileData')
        result = await result.json()
        setMobileData(result)
    }
    // console.log(mobileData)

  return (
    <div className='mobileCategory'>
      {
        mobileData.map((item, i)=> (
            <div key={item._id} className="singalMobile">
                <div>
                    <img className="imag" src={item.imag[0]} alt="#" />
                </div>
                <div className="description">
                    <Link to={`/mobiles/${item._id}`} style={{fontSize: '25px', fontWeight: "bold", marginBottom: "10px", color: "rgb(48, 15, 73)"}}>{item.name}</Link>
                    <h2 style={{display: "flex", alignItems: "center"}}><CurrencyRupeeIcon/> {item.price} </h2>
                    <div className="rating">
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarOutlineIcon style={{width: "18px"}}/>
                    </div>
                    <h3>Free delivery by amazon</h3>
                </div>
            </div>
        ))
      }
      {
        mobileData.map((item, i)=> (
            <div key={item._id} className="singalMobile">
                <div>
                    <img className="imag" src={item.imag} alt="#" />
                </div>
                <div className="description">
                    <Link to={`/mobiles/${item._id}`} style={{fontSize: '25px', fontWeight: "bold", marginBottom: "10px", color: "rgb(48, 15, 73)"}}>{item.name}</Link>
                    <h2 style={{display: "flex", alignItems: "center"}}><CurrencyRupeeIcon/> {item.price} </h2>
                    <div className="rating">
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarRateIcon style={{width: "18px"}}/>
                        <StarOutlineIcon style={{width: "18px"}}/>
                    </div>
                    <h3>Free delivery by amazon</h3>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Mobile
