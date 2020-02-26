import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is to write via{' '}
        <a href="https://vk.com/vad1m88" target="_blank" rel="noopener noreferrer">
          VK
        </a>
        !
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
