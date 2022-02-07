import React, { useEffect, useState } from "react";
import useAuth from "../../context/AuthProvider/useAuth.js";
import PopularPd from "../PopularPd/PopularPd.js";
import { Row } from "react-bootstrap";

const PopularPds = () => {
  const { user } = useAuth();
  const [shopProduct, setShopProduct] = useState([]);
  const shopingInfo = { user: user.displayName, email: user.email };
  const [addCart, setAddCart] = useState(shopingInfo);
  useEffect(() => {
    fetch("https://murmuring-cove-81107.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setShopProduct(data));
  }, []);

  const handaleAdd = (id) => {
    const uri = `https://murmuring-cove-81107.herokuapp.com/products/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAddCart(data));

    const shopInfo = {
      ...addCart,
      displayName: user.displayName,
      email: user.email,
    };

    fetch("https://murmuring-cove-81107.herokuapp.com/foodManage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shopInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("added successfully");
        }
      });
  };

  return (
    <div>
      <div className="Weekly-products py-4">
        <div className="shop-product">
          <div className="hr-tag"></div>
          <div className="hr-tag"></div>
        </div>
        {/* -----------------------  product ------------------------ */}
        <Row xs={1} md={4} className="g-5">
          {shopProduct.slice(0, 4).map((product) => (
            <PopularPd
              key={product._id}
              product={product}
              handaleAdd={handaleAdd}
            ></PopularPd>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PopularPds;
