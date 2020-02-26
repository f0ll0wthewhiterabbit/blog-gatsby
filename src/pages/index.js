import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h1>I'm Vadim, a full-stack developer living in beautiful Vitebsk.</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
