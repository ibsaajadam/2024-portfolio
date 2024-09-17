import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ProjectsPage() {
  const projects = [
    {
      title: 'Bible Categories App',
      description: 'A React and TypeScript app to browse Bible categories and view corresponding verses.',
      techStack: ['React', 'TypeScript', 'Bootstrap', 'JSON'],
      githubLink: 'https://github.com/ibsaajadam/bible-categories',
      liveDemo: 'https://biblecategories.netlify.app/'
    },
    {
      title: 'Review Spotter',
      description: 'A React app where users can browse attractions, leave reviews, and rate attractions.',
      techStack: ['React', 'Firebase', 'Bootstrap', 'CSS'],
      githubLink: 'https://github.com/ibsaajadam/review-spotter',
      liveDemo: 'https://review-spotter.netlify.app/'
    },
    {
      title: "That's My Doggo",
      description: 'A PHP and MySQL project with an API that searches for different dog breeds. Uses JavaScript for dynamic interaction.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'API'],
      githubLink: 'https://github.com/ibsaajadam/hey-buddy-php-mysql',
      liveDemo: '' // Add live demo link if available
    }
  ];

  return (
    <Container className="mt-5">
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <strong>Technologies:</strong> {project.techStack.join(', ')}
                </Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank">View Code</Button>
                {' '}
                {project.liveDemo && (
                  <Button variant="secondary" href={project.liveDemo} target="_blank">Live Demo</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsPage;
