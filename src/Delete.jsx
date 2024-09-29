import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete = ({ users, deleteUser }) => {
  const { index } = useParams(); // Get the index from the URL
  const navigate = useNavigate();

  // Convert index from string to number (useParams returns it as a string)
  const userIndex = parseInt(index, 10);

  const handleDelete = () => {
    deleteUser(userIndex); // Pass the correct index to delete the user
    navigate("/"); // Redirect to home after deletion
  };

  if (userIndex >= users.length || userIndex < 0) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete {users[userIndex].name}?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>No, Cancel</button>
    </div>
  );
};

export default Delete;
