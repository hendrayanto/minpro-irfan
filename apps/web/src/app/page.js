"use client";

import React from 'react'
import Head from 'next/head'

import Hero from '../components/Hero'
import Features1 from '../components/Features1'
import FeatureExplore from '../components/Feature-explore'
import Features2 from '../components/Features2'
import Pricing from '../components/Pricing'
import FeaturesBrowse from '../components/Feature-browse'
import Testimonial from '../components/Testimonial'
import OfficeAddress from '../components/Office-address'
import Footer from '../components/Footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Musical Party</title>
          <meta property="og:title" content="Musical Party" />
        </Head>
        
        <Hero image6Src="/image/c8-1500w.jpg"></Hero>
        <Features1></Features1>
        <FeatureExplore></FeatureExplore>
        <Features2></Features2>
        <Pricing></Pricing>
        <FeaturesBrowse></FeaturesBrowse>
        <Testimonial></Testimonial>
        <OfficeAddress></OfficeAddress>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
