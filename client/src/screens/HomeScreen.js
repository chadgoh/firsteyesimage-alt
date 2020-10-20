import React from "react";
import { Col, Row } from "react-bootstrap";
import Service from "../components/Service";
import services from "../services";

const HomeScreen = () => {
  return (
    <>
      <h1>All Services</h1>
      <Row>
        {services.map((service) => (
          <Col sm={12} md={6} lg={4} xl={3} key={service.id}>
            <Service service={service} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
