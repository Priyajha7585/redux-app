import React from 'react';

function Home() {
  return (
    <>
    <div>
      <img src='https://cdn-icons-png.flaticon.com/512/34/34627.png' style={{height:"70px", width:"70px", position:"absolute", right:"1%", top:"1%"}}/>
    </div>
    <h1>Home component</h1>
    <div className='cart-wrapper' style={{width:"20vw", border:"1px solid grey", padding:"10px"}}>
        <div className='img-wrapper item' >
            <img src='https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605269918/Croma%20Assets/Communication/Mobiles/Images/8999510310942.png/mxw_1440,f_auto'
              style={{height:"150px"}}
            />
        </div>
        <div className='text-wrapper item'>
            <h3>
                I-phone
            </h3>
            <h5>Price : $10000.00</h5>
        </div>
        <div className='btn-wrapper item' >
            <button style={{height:"40px", backgroundColor:"red", border:"1px solide grey", borderRadius:"10px"}}>Add To Cart</button>
        </div>
    </div>
    </>
  )
}

export default Home