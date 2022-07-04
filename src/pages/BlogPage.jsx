import React from 'react'
import Navbar2 from '../components/Navbar2'
import BlogCards from '../components/BlogCards'
import '../css/BlogPage.css'

const BlogPage = () => {
  return (
    <>
    <Navbar2 />
    <h1>Blog Page</h1>
    <div className="row row-custom" >
        <BlogCards title={Blogs[0].title} author={Blogs[0].sub} date={Blogs[0].date} image={Blogs[0].img}/>
        <BlogCards />
        <BlogCards />
        <BlogCards />
      </div>
    </>
  )
}

const Blogs=[
  {title:"LOL", sub:"authorname", date:"69/69/6969",img: "https://source.unsplash.com/random"},
  {title:"LOL", sub:"authorname", date:"69/69/6969",img: "https://source.unsplash.com/random"},
  {title:"LOL", sub:"authorname", date:"69/69/6969",img: "https://source.unsplash.com/random"},
  {title:"LOL", sub:"authorname", date:"69/69/6969",img: "https://source.unsplash.com/random"}];

export default BlogPage