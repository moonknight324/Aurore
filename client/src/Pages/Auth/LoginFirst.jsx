import React from "react";
import { Link } from "react-router-dom";

function LoginFirst() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>You need to login first</h2>
      <p>Please <Link to = "/login">login</Link> to access this page.</p>
    </div>
  );
}

export default LoginFirst;
