import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import photo1 from '../assets/img/About/photo1.jpeg';
import photo2 from '../assets/img/About/photo2.jpeg';
import photo3 from '../assets/img/About/photo3.jpeg';
import photo4 from '../assets/img/About/photo4.jpeg';
import photo5 from '../assets/img/About/photo5.jpeg';

export default class About extends Component {
  render() {
    return (
      <Container className="mt-3">
        <h1 className="text-center">About us</h1>
        <Tab.Container id='lebt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Morbi metus turpis
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Integer accumsan
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Curabitur leo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Nulla maximus
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    Integer placerat
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src={photo1} alt="" className="w-100 about__tab-img" />
                  <p>Sed elementum elementum erat, gravida iaculis est egestas non. 
                    Nullam blandit sodales mi id volutpat. Fusce at ultricies sem, vitae pretium nisl. 
                  </p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey="second">
                  <img src={photo2} alt="" className="w-100 about__tab-img" />
                  <p>Integer et nunc eget justo convallis interdum. Proin blandit mi turpis, eget eleifend tortor imperdiet non. 
                    Curabitur leo urna, cursus id lacinia eget, laoreet at nunc.
                  </p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey="third">
                  <img src={photo3} alt="" className="w-100 about__tab-img" />
                  <p>Donec velit ipsum, feugiat sit amet dolor non, tincidunt molestie libero. 
                    Sed sed velit non nulla tempus mollis. Etiam pellentesque turpis neque, ut mattis sapien bibendum eu.
                  </p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey="fourth">
                  <img src={photo4} alt="" className="w-100 about__tab-img" />
                  <p>Nulla ornare ex vel tincidunt molestie. Phasellus sed tortor lacinia, auctor arcu id, mollis nisi. 
                    Sed quis lectus a purus eleifend pellentesque. Mauris id lorem dui.
                  </p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content>
                <Tab.Pane eventKey="fifth">
                  <img src={photo5} alt="" className="w-100 about__tab-img" />
                  <p>Nulla laoreet odio non varius convallis. Pellentesque consequat turpis nec pulvinar mollis. 
                    Vivamus leo odio, egestas ut metus et, dapibus aliquet ex.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}