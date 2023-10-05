import React from "react";

function AddBanner() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h3 className="fw-bold">Banner Management</h3>
      </div>

      <div className="container-fluid general-widget">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <form method="post" encType="multipart/form-data">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label className="form-label">Banner Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="cat_img"
                      required
                    />
                    <input type="hidden" name="type" value="add_banner" />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Banner Use For?</label>
                    <select name="b_type" className="form-control" required>
                      <option value="">Select Status</option>
                      <option value="1">Transporter</option>
                      <option value="2">Lorry Owner</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Banner Status</label>
                    <select name="status" className="form-control" required>
                      <option value="">Select Status</option>
                      <option value="1">Publish</option>
                      <option value="0">UnPublish</option>
                    </select>
                  </div>
                </div>
                <div className="card-footer text-left">
                  <button className="btn btn-primary my-2">Add Banner</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBanner;
