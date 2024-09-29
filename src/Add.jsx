import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = ({addUser}) => {
    const [user, setUser] = useState({ name: "", email: "", age: "" });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addUser(user);
      navigate("/"); // Redirect to home after adding user
    };
  
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  };

export default Add