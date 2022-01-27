import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {

const [inputValue, SetInputValue] = useState ('')

const handleInputChange  = (e) => {
  SetInputValue (e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(inputValue.trim().length >2) {
    setCategories(categs => [ inputValue,...categs])
    SetInputValue('')
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange }
      />
    </form>
  );
};

AddCategory.prototypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
