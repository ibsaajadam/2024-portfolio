import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';

import jobBoardImage from '../assets/job-board-image.png';
import reviewSpotterImage from '../assets/review-spotter-image.png';
import doggoImage from '../assets/doggo-image.png';
import FlickBFFImage from '../assets/official-flickbff.png';
import TrackAMealImage from '../assets/trackameal.png';

function ProjectsPage() {
  const portfolioProjects = [
    {
      title: 'Job Board App',
      description:
        'A React.js and Next.js application that helps users find job listings based on location and skills.',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      githubLink: 'https://github.com/ibsaajadam/job-board',
      liveDemo: 'https://updated-job-board.netlify.app/',
      image: jobBoardImage
    },
    {
      title: 'Review Spotter',
      description:
        'A React app where users can browse attractions, leave reviews, and rate attractions. Includes Google Authentication via Firebase.',
      techStack: ['React', 'Firebase', 'Bootstrap', 'CSS', 'Google Sign-In'],
      githubLink: 'https://github.com/ibsaajadam/review-spotter',
      liveDemo: 'https://review-spotter.netlify.app/',
      image: reviewSpotterImage
    },
    {
      title: "That's My Doggo",
      description:
        'A PHP and MySQL project with an API that searches for different dog breeds. Uses JavaScript for dynamic interaction.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'API'],
      githubLink: 'https://github.com/ibsaajadam/hey-buddy-php-mysql',
      liveDemo: '',
      image: doggoImage
    }
  ];

  const personalProjects = [
    {
      title: 'Flick BFF',
      description:
        'A React app that lets users list favorite movies and shows and connect with others based on shared taste.',
      techStack: ['React', 'Tailwind CSS', 'Bootstrap'],
      githubLink: 'https://github.com/ibsaajadam/flick-bff',
      liveDemo: '',
      image: FlickBFFImage
    },
    {
      title: 'Track A Meal',
      description:
        'A food tracking app built with React where users can log meals and monitor daily nutrition goals.',
      techStack: ['React', 'Tailwind CSS', 'Bootstrap'],
      githubLink: 'https://github.com/ibsaajadam/track-a-meal',
      liveDemo: '',
      image: TrackAMealImage
    }
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <Col md={4} key={index} className="mb-4">
        <Card>
          {project.image && (
            <Card.Img
              variant="top"
              src={project.image}
              alt={`${project.title} image`}
            />
          )}
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>
              <strong>Technologies:</strong>{' '}
              {project.techStack.map((tech, i) => (
                <span key={i} className="d-inline-block me-2">
                  {tech === 'Google Sign-In' ? (
                    <>
                      <FcGoogle style={{ marginBottom: '3px' }} /> {tech}
                    </>
                  ) : (
                    tech
                  )}
                  {i < project.techStack.length - 1 && ','}
                </span>
              ))}
            </Card.Text>
            {project.githubLink && (
              <Button variant="primary" href={project.githubLink} target="_blank">
                View Code
              </Button>
            )}{' '}
            {project.liveDemo && (
              <Button variant="secondary" href={project.liveDemo} target="_blank">
                Live Demo
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Portfolio Projects</h2>
      <Row>{renderProjects(portfolioProjects)}</Row>

      <h2 className="mb-4 mt-5">Personal Projects</h2>
      <Row>{renderProjects(personalProjects)}</Row>
    </Container>
  );
}

export default ProjectsPage;
