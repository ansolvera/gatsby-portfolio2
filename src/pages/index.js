import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroSection from '../components/HeroSection'
import CloudSection from '../components/CloudSection'
import NewsletterSection from '../components/NewsletterSection'
import AboutSection from '../components/AboutSection'
import FeatureSection from '../components/FeatureSection'
import Modal from '../components/Modal'
import PortfolioSection from '../components/PortfolioSection'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <CloudSection />
    <AboutSection />
    <FeatureSection />
    <NewsletterSection />
    <PortfolioSection />
    <Modal />
  </Layout>
)

export default IndexPage
