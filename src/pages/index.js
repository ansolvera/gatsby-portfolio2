import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroSection from '../components/HeroSection'
import CloudSection from '../components/CloudSection'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <CloudSection />
  </Layout>
)

export default IndexPage
