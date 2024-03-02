import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Announcement />
      <div className="p-4 sm:p-20" id="privacyPolicy">
        <p className="text-3xl font-semibold mb-4">Return and Refund Policy</p>
        <p className="text-xl">
          At Oxysaver, we strive to give you the very best shopping experience
          possible. However, considering that opened or damaged products cannot
          be reused and has to be in accurate condition, we cannot accept
          exchange or return of any products once sold or delivered.
        </p>
        <p className="text-xl">
          Oxysaver is not responsible for any damage caused after delivery.
        </p>
        <p className="text-xl">
          In case of damage product issue (at the time of delivery) with the
          product, we exchange the product. All you need to do is give us a call
          or email us within 24 hours of delivery. You can reach us on
        </p>
        <p className="text-xl">hello@oxysaver.com</p>
        <p className="text-xl">
          Exchange of products will be accepted only if the products are
          returned in a saleable condition with the original receipt/tags intact
          and in their original packaging, in an undamaged condition and subject
          to following terms-
        </p>
        <p className="text-xl">
          Returns and exchanges requests will be subject to checking and vetting
          by Oxysaver.
        </p>
        <p className="text-xl">
          Damages due to neglect, will not be covered under this Policy.
        </p>
        <p className="text-xl">
          Once your return request has been accepted, the process will be
          completed within 7-21 business days.
        </p>
        <p className="text-xl">No Refund shall be made once goods are sold.</p>
        <p className="text-xl">
          All products once purchased are non-refundable. In general, an item
          maybe eligible for return within 2 days from the date of Product
          Delivery if it fulfils any of the following conditions:
        </p>
        <p className="text-xl font-semibold my-4">RETURN POLICY</p>
        <p className="text-xl">
          Sold in a physically damaged condition. Has missing parts or
          accessories Worldwide Copyright © Bennies products pvt Ltd. (brand
          owners Oxysaver). All worldwide rights reserved.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default PrivacyPolicy
