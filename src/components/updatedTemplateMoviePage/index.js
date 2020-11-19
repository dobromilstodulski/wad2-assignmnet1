import React from "react";
import MovieHeader from '../headerMovie'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UpdatedTemplateMoviePage = ({ movie, children }) => {
  return (
    <>
      <Container>
          <Row>
              <Col>
                {children}
              </Col>
          </Row>
      </Container>
    </>
  );
};

export default UpdatedTemplateMoviePage;