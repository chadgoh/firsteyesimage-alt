import React from "react";
import { Card } from "react-bootstrap";

const Service = ({ service }) => {
  console.log(service.image);
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/service/${service.id}`}>
        <Card.Img src={service.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/service/${service.id}`}>
          <Card.Title as="div">
            <strong>{service.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">{service.summary}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
