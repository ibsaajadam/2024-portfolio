import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="mb-3">About Me</h1>

          <Button
            variant="dark"
            href="https://drive.google.com/file/d/13DxIUY6KWpq5R7MmiJymQzWg-EGKNc7d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
          >
            View My Resume
          </Button>

          <p>
            Hi, I’m <strong>Ibsaa Jamal Adam</strong>, a web developer with hands-on experience building and maintaining websites using tools like React, PHP, and Drupal.
          </p>

          <p>
            At Worcester Polytechnic Institute (WPI), I contributed directly to the university’s main website—resolving bugs, enhancing UI components, and pushing updates through GitLab and Acquia. Although I began with no Drupal experience, I quickly adapted and became confident using it in production environments.
          </p>

          <p>
            I worked closely with UI designers and developers to implement design improvements, optimize user experience, and manage content modules. This collaborative environment helped sharpen both my technical skills and my eye for design.
          </p>

          <p>
            Beyond my technical work, I’m passionate about building clean, user-centered experiences. Whether solving bugs or launching new features, I approach every project with creativity, curiosity, and a team-first mindset.
          </p>

          <p>
            Outside of tech, I’m focused on personal growth. I’ve spent time in therapy, read self-help books, and attended church-based small groups. I also enjoy running, boxing, entrepreneurship, and bringing a positive attitude wherever I go.
          </p>

          <hr />
          <h2 className="mt-4">Technologies & Skills</h2>
          <ul>
            <li><strong>Front-End:</strong> HTML, CSS, JavaScript, Sass, React, Vue, BEM, Bootstrap, Tailwind CSS</li>
            <li><strong>Back-End:</strong> PHP, Flask, Drupal, WordPress, Twig</li>
            <li><strong>Database & Hosting:</strong> Firebase, MySQL, SQLite, Acquia, Heroku</li>
            <li><strong>Tools & Platforms:</strong> Git, GitLab, Google Suite, Figma</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
