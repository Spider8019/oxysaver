import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const HowToUse = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="p-4 sm:p-20">
        <h1 className="text-4xl">How To Use</h1>
        <div className='grid sm:grid-cols-2 gap-8 my-12 sm:my-20'>
          {[
            {
              title: 'Attach',
              body: 'Open the cup and attach the mask with nozzle',
              img:
                'https://i.pinimg.com/564x/58/60/89/586089f3b9fb9d8a255bb924e81477c4.jpg',
            },
            {
              title: 'Inhale',
              body: 'Put the mask on mouth and take a quick puff',
              img:
                'https://i.pinimg.com/564x/58/60/89/586089f3b9fb9d8a255bb924e81477c4.jpg',
            },
            {
              title: 'Exhale',
              body: 'Exhale without holding the canister',
              img:
                'https://i.pinimg.com/564x/58/60/89/586089f3b9fb9d8a255bb924e81477c4.jpg',
            },
            {
              title: 'Repeat',
              body: 'Take 3 to 5 puffs at a time',
              img:
                'https://i.pinimg.com/564x/58/60/89/586089f3b9fb9d8a255bb924e81477c4.jpg',
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="p-8 sm:p-20 rounded-3xl flex gap-8 bg-cyan-600 items-center"
              >
                <div>
                  <h1 className="text-3xl font-semibold">{item.title}</h1>
                  <p className="text-xl ">{item.body}</p>
                </div>
                <img
                  className="w-20 h-20 sm:w-40 sm:h-40 rounded-full"
                  src={item.img}
                  alt="Adfa"
                />
              </div>
            )
          })}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default HowToUse
