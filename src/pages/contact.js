import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is to write via{' '}
        <a href="https://vk.com/vad1m88" target="_blank" rel="noopener noreferrer">
          VK
        </a>
        !
      </p>
    </Layout>
  )
}

export default ContactPage
