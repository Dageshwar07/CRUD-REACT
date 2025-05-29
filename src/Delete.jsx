import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete = ({ users, deleteUser }) => {
  const { index } = useParams(); // Get the index from the URL
  const navigate = useNavigate();

  const userIndex = parseInt(index, 10);

  const handleDelete = () => {
    deleteUser(userIndex);
    navigate("/");
  };

  if (userIndex >= users.length || userIndex < 0) {
    return (
      <div className="text-center text-red-600 mt-10 text-lg">
        <p>User not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Delete User</h2>
      <p className="mb-6 text-gray-700">
        Are you sure you want to delete{" "}
        <span className="font-semibold">{users[userIndex].name}</span>?
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          No, Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
