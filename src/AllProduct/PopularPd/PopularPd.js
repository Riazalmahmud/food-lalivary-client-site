import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "@mui/material/Rating";
const PopularPd = (props) => {
  const { handaleAdd } = props;
  const { price, title, image, _id, description } = props.product;
  return (
    <div>
      <Col>
        <Card className="shopNow pt-3">
          <div className="card-design">
            <Card.Img variant="top" src={image} />
            <br />
            <h5 className="pt-2"> {title} </h5>
            <p className="pt-2"> {description} </p>
            <p> price ${price}</p>
            {/* <button type="button">quick view</button> */}
            <button
              type="button"
              onClick={() => handaleAdd(_id)}
              className="btn btn-danger fw-bold my-3 "
            >
              Add to delivary
            </button>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default PopularPd;
