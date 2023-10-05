import React from "react";
import "./Home.css";

function Home() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "100vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }} className="text-center mx-auto">
        <h3 className="fw-bold">Pickup Location</h3>
      </div>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container-fluid general-widget">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <form method="post" encType="multipart/form-data">
                    <div className="card-body">
                      <div className="form-group mb-3">
                        <label className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          name="location"
                          placeholder="Your Location"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          name="destination"
                          placeholder="Choose Destination"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div style={{ padding: "20px" }} className="text-center mx-auto">
        <h3 className="fw-bold">Pickup Date</h3>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="container-fluid general-widget">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <form method="post" encType="multipart/form-data">
                    <div className="card-body">
                      <div className="form-group row mb-3">
                        <div className="col-sm-6">
                          <label className="form-label">Choose Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="blue-input"
                            name="location"
                            placeholder="Your Location"
                            required
                          />
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label">Choose Time</label>
                          <input
                            type="time"
                            className="form-control"
                            id="blue-input"
                            name="destination"
                            placeholder="Choose Destination"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div style={{ padding: "20px" }} className="text-center mx-auto">
        <h3 className="fw-bold">Select Vehicle Type</h3>
      </div>

      <div style={{ padding: "20px" }} className="text-center mx-auto">
        <h3 className="fw-bold">Select Your Weight</h3>
      </div>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container-fluid general-widget">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <form method="post" encType="multipart/form-data">
                    <div className="card-body">
                      <div className="form-group mb-3">
                        <label className="form-label"></label>
                        <input
                          type="text"
                          className="form-control"
                          name="weight"
                          placeholder="Enter Weight"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Home;
