import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Slider = () => {
  return (
    <div className="overflow-hidden rounded-b-lg shadow">
      <div
        className="w-full sm:h-[calc(100vh - 142px)] h-[50vh] overflow-hidden"
      >
        <img
          className="h-full w-full object-cover"
          src={
            'https://i.pinimg.com/originals/2d/95/66/2d95662deb38e0c115a96f448bd47856.jpg'
          }
          alt="product banner"
        />
      </div>
    </div>
  )
}

export default Slider
