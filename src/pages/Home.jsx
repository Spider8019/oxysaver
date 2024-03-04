import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Banner from '../assets/images/banner.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      {/* <Categories /> */}
      <div className="flex sm:flex-row-reverse items-center justify-around flex-col-reverse m-4 sm:my-20 order-last sm:order-first">
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=836121487095791101"
          height="714"
          width="345"
          frameborder="0"
          scrolling="no"
          title=";ALKJD"
        ></iframe>
        <h1 className="font-semibold text-2xl sm:text-8xl py-4">
          For Better Assistance,
          <br /> Watch the Video
        </h1>
      </div>
      <p className="text-3xl sm:text-5xl font-semibold m-4 mt-12">
        All Purposes
      </p>

      <div className="grid sm:grid-cols-2 gap-4 m-4">
        {[
          {
            body: 'Open the cup and attach the mask with nozzle',
            img:
              'https://i.pinimg.com/originals/2d/95/66/2d95662deb38e0c115a96f448bd47856.jpg',
          },
          {
            body: 'Put the mask on mouth and take a quick puff',
            img:
              'https://i.pinimg.com/originals/2d/95/66/2d95662deb38e0c115a96f448bd47856.jpg',
          },
          {
            body: 'Exhale without holding the canister',
            img:
              'https://i.pinimg.com/originals/2d/95/66/2d95662deb38e0c115a96f448bd47856.jpg',
          },
          {
            body: 'Take 3 to 5 puffs at a time',
            img:
              'https://i.pinimg.com/originals/2d/95/66/2d95662deb38e0c115a96f448bd47856.jpg',
          },
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="transition duration-500 bg-white rounded-xl shadow filter items-center grid sm:grid-cols-2 hover:bg-[#66bcd2] overflow-hidden"
            >
              <img
                src={Banner}
                className="rounded-xl h-full w-full object-cover"
                alt={`Small banner ${idx}`}
              />
              <div className="p-4">
                <p className="text-2xl">{item.body}</p>
              </div>
            </div>
          )
        })}
      </div>

      <Products />
      <Footer />
    </div>
  )
}

export default Home
