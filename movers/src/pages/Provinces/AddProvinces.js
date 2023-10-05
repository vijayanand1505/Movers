import React from "react";

function AddProvinces() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h3 className="fw-bold">Province Management</h3>
      </div>

      <div className="container-fluid general-widget">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <form method="post" encType="multipart/form-data">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label className="form-label">Province Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter title"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Province Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="cat_img"
                      required
                    />
                    <input type="hidden" name="type" value="add_banner" />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Province Status</label>
                    <select name="status" className="form-control" required>
                      <option value="">Select Status</option>
                      <option value="1">Publish</option>
                      <option value="0">UnPublish</option>
                    </select>
                  </div>
                </div>
                <div className="card-footer text-left">
                  <button className="btn btn-primary my-2">Add Province</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProvinces;
