import React from "react";

function CompletedOrder() {
  const containerStyle = {
    backgroundColor: "#e6f3ff",
    minHeight: "90vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h1>Completed Order</h1>
      </div>
    </div>
  );
}

export default CompletedOrder;
