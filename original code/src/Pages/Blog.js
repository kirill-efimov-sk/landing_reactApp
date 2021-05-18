import React, { Component } from 'react';
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap';
import blogPost1 from '../assets/img/Blog/img_blog1.jpg';
import blogPost2 from '../assets/img/Blog/img_blog2.jpg';
import blogPost3 from '../assets/img/Blog/img_blog3.jpg';
import blogPost4 from '../assets/img/Blog/img_blog4.jpg';


export default class Blog extends Component {
  render() {
    return (
      <div>
        <Container className="tab-container">
          <Row>
            <Col md="9">
            <Media className="mb-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blogPost1.replace('static/', 'static/')}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            <Media className="mb-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blogPost2.replace('static/', 'static/')}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            <Media className="mb-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blogPost3.replace('static/', 'static/')}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            <Media className="mb-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blogPost4.replace('static/', 'static/')}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            </Col>
            <Col md="3">
              <h5 className="text-center mb-3">Categories</h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras sit</ListGroup.Item>
                  <ListGroup.Item>Fusce condimentum</ListGroup.Item>
                  <ListGroup.Item>Cras purus</ListGroup.Item>
                  <ListGroup.Item>Nulla ve</ListGroup.Item>
                </ListGroup>
              </Card>

              <Card className="mt-3" bg="light">
                <Card.Body>
                  <Card.Title>Nulla ve</Card.Title>
                  <Card.Text>
                    Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}