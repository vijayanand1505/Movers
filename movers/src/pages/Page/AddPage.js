import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddPage() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Status:", status);
    console.log("Content:", content);
  };

  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    margin: "-24px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h3 className="fw-bold">Page Management</h3>
      </div>

      <div className="container-fluid general-widget">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label className="form-label">Enter Page Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Select Page Status</label>
                    <select
                      name="status"
                      className="form-control"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      required
                    >
                      <option value="">Choose..</option>
                      <option value="1">Publish</option>
                      <option value="0">UnPublish</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="cdesc" className="form-label">
                      Page Description
                    </label>
                    <ReactQuill
                      theme="snow"
                      value={content}
                      onChange={handleChange}
                      style={{
                        border: "1px solid #ccc",
                        // minHeight: "200px",
                      }}
                    />
                  </div>
                </div>
                <div className="card-footer text-left">
                  <button type="submit" className="btn btn-primary my-2">
                    Add Pages
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPage;
