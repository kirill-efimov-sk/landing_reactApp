import { React, Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import spaceImg from '../../assets/img/space.jpeg';
import stormImg from '../../assets/img/storm.jpeg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel style={{height: '100%'}}>
        <Carousel.Item>
          <img
            className='d-block h-100 image__carousel'
            src={ spaceImg.replace('static/', 'static/') }
            alt='space'
          />
          <Carousel.Caption>
            <h3>Cras sit</h3>
            <p>Cras sit amet nibh libero</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block h-100 image__carousel'
            src={ stormImg.replace('static/', 'static/') }
            alt='storm'
          />
          <Carousel.Caption>
            <h3>Fusce condimentum</h3>
            <p>Fusce condimentum nunc ac nisi vulputate fringilla.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}