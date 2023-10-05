import React from "react";
import "./Banner.css";
import DataTable from "./DataTable";

function ListBanner() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h3 className="fw-bold">Banner List Management</h3>
      </div>
      <div className="mx-4">
        <DataTable />
      </div>
    </div>
  );
}

export default ListBanner;
