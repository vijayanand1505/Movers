import React from "react";
import "./Dashboard.css";
import {
  FaBeer,
  FaBuilding,
  FaCogs,
  FaUsers,
  FaTruck,
  FaTruckLoading,
  FaMoneyBillAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiPagesLine, RiMoneyDollarBoxFill } from "react-icons/ri";
import {
  BsCartCheckFill,
  BsCartFill,
  BsCartXFill,
  BsCartPlusFill,
} from "react-icons/bs";

function Dashboard() {
  const containerStyle = {
    backgroundColor: "rgba(230, 247, 255, 0.5)",
    minHeight: "91vh",
    // padding: "20px",
    margin: "-24px",
  };
  return (
    <div style={containerStyle}>
      <div className="d-flex justify-content-between align-items-center p-4">
        <h2 className="fw-bold">Dashboard</h2>
        <div className="d-flex">
          <button className="btn btn-primary mr-2">Get Earning Report</button>{" "}
          &nbsp;
          <button className="btn btn-secondary">Check Payment</button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold"> Banners</h5>
                    <h5 className="card-category">7</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaBeer className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">States</h5>
                    <h5 className="card-category">30</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaMapMarkedAlt className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Transporters</h5>
                    <h5 className="card-category">37</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaBuilding className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Total FAQ</h5>
                    <h5 className="card-category">32</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaCogs className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Lorry Owners</h5>
                    <h5 className="card-category">22</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaUsers className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Total Lorry</h5>
                    <h5 className="card-category">21</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaTruck className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Total Pages</h5>
                    <h5 className="card-category">14</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <RiPagesLine className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Pending Loads</h5>
                    <h5 className="card-category">19</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaTruckLoading className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Accepted Loads</h5>
                    <h5 className="card-category">8</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <BsCartCheckFill className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Pickup Load</h5>
                    <h5 className="card-category">2</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <BsCartFill className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Completed Load</h5>
                    <h5 className="card-category">11</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <BsCartPlusFill className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Cancelled Load</h5>
                    <h5 className="card-category">16</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <BsCartXFill className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Total Sales</h5>
                    <h5 className="card-category">28020.00$</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <FaMoneyBillAlt className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Total Earnings</h5>
                    <h5 className="card-category">28020.00$</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <GiReceiveMoney className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Pending Payouts</h5>
                    <h5 className="card-category">28020.00$</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <GiTakeMyMoney className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{
              borderRadius: "17px",
              borderColor: "rgba(230, 247, 255, 0.5)",
              borderWidth: "3px",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="numbers">
                    <h5 className="card-title fw-bold">Completed Payout</h5>
                    <h5 className="card-category">28020.00$</h5>
                  </div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <div className="icon-big text-center icon-warning">
                    <RiMoneyDollarBoxFill className="responsive-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
