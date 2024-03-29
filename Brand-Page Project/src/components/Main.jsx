import React from 'react'

const Main = () => {
  return (
    <>
    <main className='main'>
    <div className='main-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
    
    <div className='btn'>
        <button className='shop'>Shop Now</button>
        <button className='cat'>Category</button>
    </div>
    <div className='shopping'>
        <p>Also Aviable On</p>
        <div className="brand-icons">
        <img src="src\assets\flipkart.png" alt="flip"/>
        <img src="src\assets\amazon.png" alt="amazon"/>
        </div>
    </div>
    </div>
    <div className="main-image">
        <img src="src\assets\hero-image.png" alt="shoe-img" />
    </div>
    </main>
    </>
  )
}

export default Main