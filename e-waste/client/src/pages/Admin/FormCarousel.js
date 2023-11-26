import React, { useState } from "react";
import CreateCategory from "./CreateCategory";
import CreateProduct from "./CreateProduct";
import toast from "react-hot-toast";
import axios from "axios";
//import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import HomePage from "../HomePage";
//const { Option } = Select;

const FormCarousel = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const goToPreviousForm = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  const goToNextForm = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const renderForm = () => {
    switch (currentForm) {
      case 0:
        return <CreateCategory />;
      case 1:
        return <CreateProduct />;
      case 2:
        return <Products />;
      default:
        return <HomePage />;
    }
  };
  const handleCreate = () => {
    console.log("Submitting");
  };
  return (
    <div>
      {renderForm()}
      {currentForm > 0 && (
        <button onClick={goToPreviousForm} style={buttonStyle}>
          Previous
        </button>
      )}
      {currentForm < 1 ? (
        <button onClick={goToNextForm} style={buttonStyle}>
          Next
        </button>
      ) : (
        <button onClick={handleCreate} style={buttonStyle}>
          Submit
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default FormCarousel;
