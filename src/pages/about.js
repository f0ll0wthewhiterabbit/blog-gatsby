import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I have skills in web-development.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
