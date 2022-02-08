import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../context/AuthProvider/useAuth.js";
import Category from "../Category/Category";
const Catagories = () => {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const shopCategory = { user: user.displayName, email: user.email };
  const [addCart, setAddCart] = useState(shopCategory);

  const handaleAddDelivary = (id) => {
    const uri = `https://murmuring-cove-81107.herokuapp.com/products/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAddCart(data));

    const delivaryInfo = {
      ...addCart,
      displayName: user.displayName,
      email: user.email,
    };

    fetch("https://murmuring-cove-81107.herokuapp.com/foodManage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(delivaryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added successfully");
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/popular_pd")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={4} className="g-1">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            handaleAddDelivary={handaleAddDelivary}
          ></Category>
        ))}
      </Row>
    </div>
  );
};

export default Catagories;
