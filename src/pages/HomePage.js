import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import myPhoto from '../assets/my-photo.jpg';

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
            Check out my projects below and feel free to reach out!
          </p>

          <Link to="/projects" className="btn btn-primary" style={{ marginRight: '20px' }}>View My Projects</Link>
          <Button 
            variant="outline-dark" 
            style={{ backgroundColor: '#f8f9fa', color: '#000' }}
            href="https://drive.google.com/file/d/1n5eNIsN9EOVPohiq3N3NSY9cGa57Vqq1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
