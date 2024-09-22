import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>About Me</h1>

          <Button 
            variant="outline-dark" 
            href="https://drive.google.com/file/d/1YW6RHKKu5_KUQj5f_uFAgQkZLMyGT9ag/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-4"
            style={{ backgroundColor: '#f8f9fa', color: '#000' }}
          >
            View Resume
          </Button>

          <p>
            Hi, my name is <strong>Ibsaa Jamal Adam</strong>. I'm new to web development and web design, but I’ve already gained valuable experience in my first role at Worcester Polytechnic Institute (WPI). There, I worked on the University's front-facing website, focusing on site improvements, handling bug fixes, and enhancing the overall user experience.
          </p>
          <p>
            When I started, I didn’t have any experience with Drupal, the content management system used at WPI. However, I quickly adapted, learning the platform and applying that knowledge to my daily tasks. My role involved handling bug fixes, tracking and noting merges with GitLab, and pushing development code to Acquia, the hosting platform we used for the website.
          </p>
          <p>
            I also collaborated with the UI Designer to refine my design skills, and together we worked on improving the user interface and overall usability of the site. This collaboration allowed me to bring new ideas to life while focusing on delivering a better user experience.
          </p>
          <p>
            I’m passionate about the process of taking a project from an initial idea to its final stages. Whether it’s solving complex problems or finding creative ways to improve a project, I enjoy the challenge. I consider myself a team player who brings a sense of humor and a positive, can-do attitude to every project I’m involved in.
          </p>
          <p>
            Outside of work, I’m committed to self-improvement and personal growth. I enjoy running and working on bettering myself in all aspects of life. I’m always excited to keep learning and growing, both as a developer and as a person, as I continue my journey in web development.
          </p>

          <hr />
          <h2>Technologies & Skills</h2>
          <ul>
            <li><strong>Front-End:</strong> HTML, CSS, JavaScript, Sass, BEM, ReactJS, VueJS</li>
            <li><strong>Back-End:</strong> PHP, Twig, Drupal, WordPress, Flask</li>
            <li><strong>Database Management:</strong> Google Firebase, MySQL, SQLite</li>
            <li><strong>Tools:</strong> GitLab, Git, Google Suite, Heroku</li>
            <li><strong>Additional Skills from Recent Project:</strong> Python, Flask, Tailwind CSS</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
