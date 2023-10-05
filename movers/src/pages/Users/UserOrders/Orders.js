import React from "react";

function Orders() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h3 className="fw-bold">Orders</h3>
      </div>
    </div>
  );
}

export default Orders;
