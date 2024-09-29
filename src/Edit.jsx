import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Edit = ({ users, editUser }) => {
    const { index } = useParams(); // Get user index from URL
    const navigate = useNavigate();
  
    const [user, setUser] = useState(users[index]);
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      editUser(index, user); // Update user
      navigate("/"); // Redirect to home
    };
  
    return (
      <div>
        <h2>Edit User</h2>
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
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  };

export default Edit