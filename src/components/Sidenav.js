import React, { Component } from "react";

export default class Sidenav extends Component {
  render() {
    return (
      <div>
        <div id="sidebar-wrapper">
          <div className="sidebar-heading mx-3 dash-ic">
            <img
              alt="img"
              src="http://hib.hh-converge.com/Converge-vF/img/Group.png"
            />
            Dashboard
          </div>
          <ul className="list-unstyled components mt-3 p-2">
            <li className="nav-item mb-2">
              <a href="#homeSubmenu">
                <i
                  className="fas fa-users-cog mr-3"
                  style={{
                    opacity: 0
                  }}
                />
                <span>Help</span>
              </a>
            </li>
            <li className="active nav-item mb-2">
              <a href="index.html">
                <img
                  alt="cog"
                  src="http://hib.hh-converge.com/Converge-vF/img/fa-solid_users-cog (2).png"
                  className="mr-3"
                  height="12px"
                />
                <span>Self Service</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="approval.html">
                <img
                  alt="logo"
                  src="http://hib.hh-converge.com/Converge-vF/img/Group.png"
                  className="mr-3"
                  height="12px"
                />
                <span> Loan Approval</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="hr.html">
                <img
                  alt="account"
                  src="http://hib.hh-converge.com/Converge-vF/img/ic-baseline-account-circle (2).png"
                  className="mr-3"
                  height="14px"
                />
                <span>HR</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="loansettings.html">
                <img
                  alt="settings"
                  src="http://hib.hh-converge.com/Converge-vF/img/feather-settings (2).png"
                  className="mr-3"
                  height="12px"
                />
                <span>Settings</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/#">
                <i className="fas fa-info-circle text-white mr-3" />
                <span> Report</span>
              </a>
            </li>
          </ul>
          <div className="col-12">
            <span
              className="btn btn-link a-l"
              data-toggle="collapse"
              href="#collapseExample"
              role="img"
              aria-expanded="false"
              aria-controls="collapseExample"
              aria-label="calender"
            >
              📅 Toggle calender
            </span>
            <div className="collapse" id="collapseExample">
              <div
                id="calendar"
                className="m-auto"
                style={{
                  width: "14rem"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
