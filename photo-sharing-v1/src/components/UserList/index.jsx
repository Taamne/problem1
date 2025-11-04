import React from "react";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

export default function UserList() {
  const users = models.userListModel(); // [{ _id, first_name, last_name }, ...]

  return (
    <div className="user-list">
      <h3>Users</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {users.map((u) => (
          <li key={u._id} style={{ marginBottom: 8 }}>
            <Link to={`/users/${u._id}`}>
              {u.first_name} {u.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}