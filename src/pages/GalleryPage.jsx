import React from 'react'
import Navbar2 from '../components/Navbar2'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

const GalleryPage = () => {
  return (
    <>
    <Navbar2 />
    <ImageSlider slides={SliderData} />;
    </>
  )
}

export default GalleryPage