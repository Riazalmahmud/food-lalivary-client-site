import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Category.css";
const Category = (props) => {
  const { handaleAddDelivary } = props;
  const { img, title, description, _id } = props.category;
  console.log(props.category);
  return (
    <div>
      <Col>
        <Card className="category">
          <div className="bg-rgba"></div>
          <div className="product-info">
            <h5 className="service-title fs-5">{title}</h5>
            <p>{description}</p>
            <button
              type="button"
              className="btn btn-danger fw-bold "
              onClick={() => handaleAddDelivary(_id)}
            >
              Add to cart
            </button>
          </div>
          <Card.Img variant="top" src={img} width={"150px"} />
        </Card>
      </Col>
    </div>
  );
};

export default Category;
