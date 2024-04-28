import React from 'react'
import Slider from '../../components/Slider/Slider'
import Catergories from '../../components/Catergories/Catergories'
import './Home.scss'
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts'
import Contact from '../../components/Contact/Contact'


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Catergories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home