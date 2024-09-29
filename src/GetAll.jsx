import React from "react";
import { Link } from "react-router-dom";

const GetAll = ({ users }) => {
  return (
    <div>
      <h2>All Users</h2>
      <Link to="/add">
        <button>Add User</button>
      </Link>
      <ul>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user, index) => (
            <li key={index}>
              Name: {user.name}, Email: {user.email}, Age: {user.age}{" "}
              <Link to={`/edit/${index}`}>
                <button>Edit</button>
              </Link>
              <Link to={`/delete/${index}`}>
                <button>Delete</button>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default GetAll;
