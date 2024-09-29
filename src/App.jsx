import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import Delete from "./Delete";
import Add from "./Add";
import GetAll from "./GetAll";

const App = () => {
  const [users, setUsers] = useState([]);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Function to edit a user by index
  const editUser = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  };

  // Function to delete a user by index
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Remove user at the specified index
    setUsers(updatedUsers); // Update the state
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<GetAll users={users} />} />
          <Route path="/add" element={<Add addUser={addUser} />} />
          <Route
            path="/edit/:index"
            element={<Edit users={users} editUser={editUser} />}
          />
          <Route
            path="/delete/:index"
            element={<Delete users={users} deleteUser={deleteUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
