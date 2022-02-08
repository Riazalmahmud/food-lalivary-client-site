import axios from "axios";
import React from "react";
import Alert from "@mui/material/Alert";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AddPopularPd = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://murmuring-cove-81107.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          <Alert severity="success">Successfully product publish </Alert>;
        }
      });
  };

  return (
    <div>
      <h1>AddPopularPd</h1>
      <div className="container my-5">
        <div className="login-form shadow-lg p-3 mb-5 bg-body rounded w-50">
          <h2>Product publish </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="login-design">
            <Form.Control
              {...register("title")}
              placeholder="Enter title"
              className="bg-transparent mt-2"
            />
            <Form.Control
              as="textarea"
              {...register("description")}
              placeholder="Enter description"
              className="bg-transparent mt-2"
              rows={3}
            />
            <Form.Control
              {...register("category")}
              placeholder="Enter category"
              className="bg-transparent mt-2"
            />
            <Form.Control
              {...register("image")}
              placeholder="Enter image uri"
              className="bg-transparent mt-2"
            />
            <Form.Control
              type="number"
              {...register("rating")}
              placeholder="Enter rating"
              className="bg-transparent mt-2"
            />
            <Form.Control
              type="number"
              {...register("price")}
              placeholder="Enter price"
              className="bg-transparent mt-2"
            />

            <button type="submit"> publish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPopularPd;
