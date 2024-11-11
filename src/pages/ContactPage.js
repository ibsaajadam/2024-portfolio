import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContactPage() {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Contact Me</h1>
          <p>
            <strong>Email:</strong> <a href="mailto:ibsaa.adam1@gmail.com">ibsaa.adam1@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ibsaajadam/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ibsaajadam</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/ibsaajadam" target="_blank" rel="noopener noreferrer">github.com/ibsaajadam</a>
          </p>
          <p>
            <strong>Location:</strong> Atlanta, Georgia
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
