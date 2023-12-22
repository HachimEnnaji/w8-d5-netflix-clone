import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer>
        <Container className="text-center mt-5 text-white">
          <Row className="justify-content-center">
            <Col xs={12} sm={6} className="text-left mb-2">
              <i className="fa fa-facebook footer-icon" />
              <i className="fa fa-instagram footer-icon" />
              <i className="fa fa-twitter footer-icon" />
              <i className="fa fa-youtube footer-icon" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Audio and Subtitles</p>
                  <p>Media Center</p>
                  <p>Privacy</p>
                  <p>Contact us</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Audio Description</p>
                  <p>Investor Relations</p>
                  <p>Legal Notices</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Help Center</p>
                  <p>Jobs</p>
                  <p>Cookie Preferences</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>Gift Cards</p>
                  <p>Terms of Use</p>
                  <p>Corporate Information</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-left mb-2">
              <Button variant="outline-secondary" size="sm" className="footer-button mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-left mb-2 mt-2 copyright">© 1997-2022 Netflix, Inc.</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
