import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import photographer1 from '../../assets/img/Home/Components/CardsHome/photographer1.jpeg';
import photographer2 from '../../assets/img/Home/Components/CardsHome/photographer2.jpeg';
import photographer3 from '../../assets/img/Home/Components/CardsHome/photographer3.jpeg';

export default class CardsHome extends Component {
  render() {
    return (
      <Container className='mt-3 mb-5'>
        <CardDeck>
          <Card border="dark" className="mb-5">
            <Card.Img variant="top" src={photographer1.replace('static/', 'static/')}/>
            <Card.Body>
              <Card.Title>Cras sit amet</Card.Title>
              <Card.Text>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo.
              </Card.Text>
            </Card.Body>
            <Button variant="dark">About</Button>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card border="dark" className="mb-5">
            <Card.Img variant="top" src={photographer2.replace('static/', 'static/')} />
            <Card.Body>
              <Card.Title>Cras sit amet</Card.Title>
              <Card.Text>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo.
              </Card.Text>
            </Card.Body>
            <Button variant="dark">About</Button>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card border="dark" className="mb-5">
            <Card.Img variant="top" src={photographer3.replace('static/', 'static/')} />
            <Card.Body>
              <Card.Title>Cras sit amet</Card.Title>
              <Card.Text>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo.
              </Card.Text>
            </Card.Body>
            <Button variant="dark">About</Button>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    )
  }
}