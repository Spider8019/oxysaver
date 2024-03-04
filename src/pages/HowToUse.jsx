import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import howtouse1 from '../assets/images/how_to_use_step_1.jpg'
import howtouse2 from '../assets/images/how_to_use_step_2.jpg'
import howtouse3 from '../assets/images/how_to_use_step_3.jpg'
import howtouse4 from '../assets/images/how_to_use_step_4.jpg'

const HowToUse = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="p-4 sm:p-20">
        <h1 className="text-4xl">How To Use</h1>
        <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-8">
          <div className="flex sm:flex-col flex-col-reverse sm:my-20 order-last sm:order-first">
            <iframe
              src="https://assets.pinterest.com/ext/embed.html?id=836121487095791101"
              title="as;ldjkja"
              className="sm:h-full sm:w-[450px] h-[100vh] w-[100%]"
              // height="900"
              // width="450"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <h1 className="text-4xl py-4">
              For Better Assistance,
              <br /> Watch the Video
            </h1>
          </div>
          <div className="grid sm:grid-cols-1 gap-8 my-12 sm:my-20">
            {[
              {
                title: 'Attach',
                body: 'Open the cup and attach the mask with nozzle',
                img: howtouse1,
              },
              {
                title: 'Inhale',
                body: 'Put the mask on mouth and take a quick puff',
                img: howtouse2,
              },
              {
                title: 'Exhale',
                body: 'Exhale without holding the canister',
                img: howtouse3,
              },
              {
                title: 'Repeat',
                body: 'Take 3 to 5 puffs at a time',
                img: howtouse4,
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative p-8 sm:p-20 rounded-3xl flex flex-col sm:flex-row gap-8 bg-[#66bcd2] sm:items-center sm:justify-between"
                >
                  <p className="text-xl sm:text-3xl sm:font-bold sm:mb-0 mb-4">
                    Step {index + 1}
                  </p>
                  <div className="sm:text-center">
                    <h1 className="text-3xl sm:text-5xl font-semibold sm:my-8">
                      {' '}
                      {item.title}
                    </h1>
                    <p className="text-xl sm:text-2xl">{item.body}</p>
                  </div>
                  <div className="p-4 bg-white rounded-3xl grid place-items-center">
                    <img
                      className="w-40 h-40 sm:w-40 sm:h-40"
                      src={item.img}
                      alt="Adfa"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className=""></div>
      <Footer />
    </>
  )
}

export default HowToUse
