import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function rightTitle(pathname) {
  if (pathname.startsWith("/photos/")) {
    const id = pathname.split("/")[2];
    const u = models.userModel(id) ?? models.userModel(String(id));
    return u ? `Photos of ${u.first_name} ${u.last_name}` : "";
  }
  if (pathname.startsWith("/users/")) {
    const id = pathname.split("/")[2];
    const u = models.userModel(id) ?? models.userModel(String(id));
    return u ? `${u.first_name} ${u.last_name}` : "";
  }
  if (pathname.startsWith("/users")) return "Users";
  return "";
}

export default function TopBar() {
  const { pathname } = useLocation();
  const title = rightTitle(pathname || "");

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <Typography variant="h6" component="div">
          HuyAT141
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}