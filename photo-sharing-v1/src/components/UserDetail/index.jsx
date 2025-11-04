import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

export default function UserDetail() {
  // ✅ Gọi hooks trực tiếp, không bao bọc trong điều kiện/hàm thường
  const { userId: paramUserId } = useParams();
  const { pathname } = useLocation();

  // Fallback từ pathname nếu param chưa có
  const rawId = paramUserId || (pathname || "").split("/")[2] || "";
  const maybeNum = Number(rawId);
  const userId = Number.isNaN(maybeNum) ? rawId : maybeNum;

  // Hỗ trợ cả id dạng number và string
  const user =
    models.userModel(userId) ??
    models.userModel(String(userId));

  if (!user) return <div>User not found.</div>;

  return (
    <div className="user-detail">
      <h2>{user.first_name} {user.last_name}</h2>
      <p><b>Location:</b> {user.location}</p>
      <p><b>Occupation:</b> {user.occupation}</p>
      <p><b>Description:</b> {user.description}</p>

      <p style={{ marginTop: 16 }}>
        <Link to={`/photos/${user._id}`}>View photos of {user.first_name}</Link>
      </p>
    </div>
  );
}