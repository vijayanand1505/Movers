import React from "react";

function Settings() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div style={{ padding: "20px" }}>
        <h3 className="fw-bold">Settings Management</h3>
      </div>

      <div className="container-fluid general-widget">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="h5_set fw-bold">
                  <i className="fa fa-gear fa-spin"></i>
                  General Information
                </h5>
                <form method="post" encType="multipart/form-data">
                  <div className="row">
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Website Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Store Name"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Website Image
                      </label>
                      <input
                        type="file"
                        className="custom-file-input form-control"
                        placeholder="Enter Store Name"
                        name="weblogo"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Select Timezone
                      </label>
                      <select name="timezone" className="form-control" required>
                        <option value>Select Timezone</option>
                        <option>Africa/Abidjan</option>
                        <option>Africa/Accra</option>
                        <option>Africa/Addis_Ababa</option>
                        <option>Africa/Algiers</option>
                        <option>Africa/Asmara</option>
                        <option>Africa/Bamako</option>
                        <option>Africa/Bangui</option>
                        <option>Africa/Banjul</option>
                        <option>Africa/Bissau</option>
                        <option>Africa/Blantyre</option>
                        <option>Africa/Brazzaville</option>
                        <option>Africa/Bujumbura</option>
                        <option>Africa/Cairo</option>
                        <option>Africa/Casablanca</option>
                        <option>Africa/Ceuta</option>
                        <option>Africa/Conakry</option>
                        <option>Africa/Dakar</option>
                        <option>Africa/Dar_es_Salaam</option>
                        <option>Africa/Djibouti</option>
                        <option>Africa/Douala</option>
                        <option>Africa/El_Aaiun</option>
                        <option>Africa/Freetown</option>
                      </select>
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Currency
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Currency"
                        name="currency"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Minimum Payout for Lorry Owner
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Payout for Lorry Owner"
                        name="payout"
                      />
                    </div>
                    <div className="form-group mb-3 col-12">
                      <h5 className="h5_set fw-bold">
                        <i className="fa fa-signal"></i>Onesignal Information
                      </h5>
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Onesignal App Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User App Onesignal App Id"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Onesignal Rest Api Key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Custom Ringtone Channel ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Custom Ringtone Channel ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Custom Ringtone Channel ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Custom Ringtone Channel ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-12">
                      <h5 className="h5_set fw-bold">
                        <i className="fa fa-signal"></i>Onesignal Information
                      </h5>
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Custom Ringtone Channel ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-4">
                      <label>
                        <span className="text-danger">*</span>
                        Transporter App Custom Ringtone Channel ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Boy App Onesignal Rest Api Key"
                        name="websitename"
                      />
                    </div>
                    <div className="form-group mb-3 col-12">
                      <button type="submit" className="btn btn-primary my-2">
                        Edit Setting
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
