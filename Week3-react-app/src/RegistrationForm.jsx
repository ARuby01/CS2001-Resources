import React, { useState } from 'react';
import './App.css'; // For styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    buyProduce: false,
    sellProduce: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Re-type password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </label>
      <label>
        <input
          type="checkbox"
          name="buyProduce"
          checked={formData.buyProduce}
          onChange={handleChange}
        />
        I want to buy produce directly from allotment owners.
      </label>
      <label>
        <input
          type="checkbox"
          name="sellProduce"
          checked={formData.sellProduce}
          onChange={handleChange}
        />
        I want to sell produce from my allotment.
      </label>
      <label>
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
        />
        I agree to the Terms of Use and Privacy Policy.
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
