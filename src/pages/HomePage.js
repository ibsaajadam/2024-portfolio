import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/my-photo.jpg';

function HomePage() {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <h2 className="mt-3" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#007bff' }}>
            Ibsaa Jamal Adam
          </h2>
          <p className="lead">I'm a Junior Web Developer with experience in Drupal, React, PHP, and more.</p>

          <Image 
            src={myPhoto} 
            alt="My Photo"
            style={{
              width: '150px', 
              height: '150px',
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
            className="mb-4"
          />

          <p>
            I also created <strong>Flick BFF</strong>, a social network built with the help of AI that matches users based on shared movie and show preferences.
            Built using <strong>Next.js, Supabase</strong> for auth, <strong>Resend.com</strong> for email notifications, and <strong>Stripe</strong> for payments. 
            You can find me on the platform at <a href="https://flickbff.com/uncleibz" target="_blank" rel="noopener noreferrer">uncleibz</a>.
          </p>

          <p>Check out my projects below and feel free to reach out!</p>

          <Link to="/projects" className="btn btn-primary me-3">View My Projects</Link>
          <Button 
            variant="outline-dark"
            style={{ backgroundColor: '#f8f9fa', color: '#000' }}
            href="https://drive.google.com/file/d/1FpYZAjAjEtqyTFUokH0aP92RFZYYtx-J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </Col>
      </Row>

      {/* Quote at the very bottom */}
      <Row className="mt-5">
        <Col>
          <p style={{ fontStyle: 'italic', color: '#6c757d' }}>
            "Understanding is key."
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
