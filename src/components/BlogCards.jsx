import React from 'react'
import { Card, Button } from 'react-bootstrap';
import '../css/BlogCards.css'

// const Picture = require('');
const BlogCards = (props) => {
  return (
    <>
    <Card className='cards'>
    <Card.Img className='Image' src={props.image} />
    <div className='content'>
    <Card.Title className='Blog-Title'> {props.title} </Card.Title>
    <Card.Text className='Blog-Subtitle'> {props.author} </Card.Text>
    <Card.Text className='Blog-Subtitle'> {props.date} </Card.Text>
    <Button className='ReadMoreButton' variant= 'dark' href={"/"}>Read More</Button>
    </div>
    </Card>
    </>
  )
};

export default BlogCards;