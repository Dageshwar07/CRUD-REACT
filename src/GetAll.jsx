import React from "react";
import { Link } from "react-router-dom";

const GetAll = ({ users }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Users</h2>
        <Link to="/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add User
          </button>
        </Link>
      </div>

      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-4 rounded-lg"
            >
              <div className="mb-2 sm:mb-0">
                <p>
                  <span className="font-semibold">Name:</span> {user.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-semibold">Age:</span> {user.age}
                </p>
              </div>
              <div className="flex space-x-2">
                <Link to={`/edit/${index}`}>
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition">
                    Edit
                  </button>
                </Link>
                <Link to={`/delete/${index}`}>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAll;
