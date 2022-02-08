import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Category.css";
const Category = (props) => {
  const { handaleAddDelivary } = props;
  const { image, title, description, _id } = props.category;
  console.log(props.category);
  return (
    <div>
      <Col>
        <Card className="category">
          <div className="popular-bg-rgba">
            <img className="img-fluid" src={image} alt="popular product" />
          </div>
          <div className="popular-info">
            <h5 className="popular-title fs-5">{title}</h5>
            <p>{description}</p>
            <button
              type="button"
              className="btn btn-danger fw-bold "
              onClick={() => handaleAddDelivary(_id)}
            >
              Add to cart
            </button>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Category;
