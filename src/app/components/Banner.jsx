import React from 'react'

export default function Banner() {
  return (
   <div className="carousel w-full h-[400px] rounded-lg overflow-hidden  my-9">

  {/* Slide 1 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/RkBZMDhn/julia-zolotova-M-x-Iax-QE3-Ms-unsplash.jpg"
      className="w-full object-cover"
      alt="Fresh Fruits"
    />
    <div className="absolute w-1/2 md:w-1/3 flex items-center h-full left-0 top-0 bg-black bg-opacity-50 text-white p-6">
      <div>
        <h2 className="text-3xl font-bold">Fresh & Organic</h2>
        <p className="text-lg">Get farm-fresh fruits and vegetables delivered daily.</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  {/* Slide 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/tMtdXXHQ/franki-chamaki-wkv-KZR4e2-OI-unsplash.jpg"
      className="w-full object-cover"
      alt="Groceries"
    />
    <div className="absolute w-1/2 md:w-1/3 flex items-center h-full left-0 top-0 bg-black bg-opacity-50 text-white p-6">
      <div>
        <h2 className="text-3xl font-bold">Daily Essentials</h2>
        <p className="text-lg">From rice to oil, everything you need in one place.</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  {/* Slide 3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/gMj26jmr/kate-trysh-s8u1-Gv2u-F3o-unsplash.jpg"
      className="w-full object-cover"
      alt="Vegetables"
    />
    <div className="absolute w-1/2 md:w-1/3 flex items-center h-full left-0 top-0 bg-black bg-opacity-50 text-white p-6">
      <div>
        <h2 className="text-3xl font-bold">Best Prices</h2>
        <p className="text-lg">Save more with exclusive deals & discounts.</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>

  )
}
