import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/my-photo.jpg';
import flickbffImage from '../assets/flickbffImage.png';

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

          {/* Profile Image */}
          <Image 
            src={myPhoto} 
            alt="My Photo"
            style={{
              width: '150px', 
              height: '150px',
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
            className="mb-3"
          />

          {/* Buttons directly under profile image */}
          <div className="mb-4">
            <Link to="/projects" className="btn btn-primary me-3">View My Projects</Link>
            <Button 
              variant="outline-dark"
              style={{ backgroundColor: '#f8f9fa', color: '#000' }}
              href="https://drive.google.com/file/d/1uC3t5_S3Pv9ggGFqQILTVS9AzjPD-smZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </Button>
          </div>

          <p>
            I also created <strong>Flick BFF</strong>, a social network built with the help of AI that matches users based on shared movie and show preferences.
            Built using <strong>Next.js</strong>, <strong>Supabase</strong> for auth, <strong>Resend.com</strong> for email notifications, and <strong>Stripe</strong> for payments. 
            You can find me on the platform at <a href="https://flickbff.com/uncleibz" target="_blank" rel="noopener noreferrer">uncleibz</a>.
          </p>

          {/* Clickable Flick BFF Image */}
          <a href="https://www.flickbff.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src={flickbffImage}
              alt="Flick BFF Preview"
              style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginBottom: '20px' }}
              fluid
            />
          </a>

          <p>Check out my projects below and feel free to reach out!</p>
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
