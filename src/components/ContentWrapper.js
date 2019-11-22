import React, { Component } from "react";

export default class ContentWrapper extends Component {

  render() {
    const { toggleClass } = this.props;
    
        return (<div>
          <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <button className="btn" id="menu-toggle" onClick={toggleClass} >
            <i className="fas fa-bars" />
          </button>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link d-flex align-items-center" href="/#">
            <p className="d-inline-block mb-0 r-14 mr-2">System Settings</p>
            <img
            alt="guy"
              src="http://hib.hh-converge.com/Converge-vF/img/user-ig.jpeg"
              className="d-inline-block user-img mr-1"
            />
            <img
              src="http://hib.hh-converge.com/Converge-vF/img/converge_logo.png"
              className="d-inline-block logo-img"
              alt="converge-logo"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-8 col-sm-pull-8">
        {/* Total outstanding loan */}
        <div className="container-fluid mb-4">
          <div className="row mt-4 mb-3">
            <div className="col-md-8 col-sm-12">
              <div className="whitebox py-4 px-4 mb-3 extend">
                <div className="row">
                  <div className="col-12">
                    <p className="r-12">TOTAL OUTSTANDING LOAN</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="r-24 font-weight-bolder">
                      4,250,182.30 <sup>NGN</sup>{" "}
                    </p>
                  </div>
                  <div className="col-sm-6 text-right">
                    <button
                      className="btn btn-green px-4"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      + Request Loan
                    </button>
                  </div>
                  <div className="col-12 my-2">
                    <hr />
                  </div>
                  <div className="col-12">
                    <p className="r-12">RUNNING LOAN(S)</p>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-sm-1 col-1 pr-0">
                        <a href="/#" data-toggle="modal" data-target="#schedule">
                          <i
                            className="fas fa-plus-square"
                            style={{ color: "#C4C4C4" }}
                          />
                        </a>
                      </div>
                      <div className="col-sm-10 col-9 pl-0">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <p
                              className="h-100"
                              style={{ lineHeight: "2.5rem" }}
                            >
                              {" "}
                              Personal Loan(N200,000)
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="r-9">July 2018</p>
                          <p className="r-9">Tenor -24 Months</p>
                          <p className="r-9">July 2020</p>
                        </div>
                      </div>
                      <div className="col-sm-1 col-1 px-0">
                        <a href="/#" data-toggle="modal" data-target="#payoff">
                          <img alt="con" src="http://hib.hh-converge.com/Converge-vF/img/Group 11 (2).png" height="17px" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-sm-1 col-1 pr-0">
                        <a href="/#" data-toggle="modal" data-target="#schedule">
                          <i
                            className="fas fa-plus-square"
                            style={{ color: "#C4C4C4" }}
                          />
                        </a>
                      </div>
                      <div className="col-sm-10 col-9 pl-0">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <p
                              className="h-100"
                              style={{ lineHeight: "2.5rem" }}
                            >
                              {" "}
                              Personal Loan(N200,000)
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="r-9">July 2018</p>
                          <p className="r-9">Tenor - 24 Months</p>
                          <p className="r-9">July 2020</p>
                        </div>
                      </div>
                      <div className="col-sm-1 col-1 px-0">
                        <a href="/#" data-toggle="modal" data-target="#payoff">
                          <img alt="con" src="http://hib.hh-converge.com/Converge-vF/img/Group 11 (2).png" height="17px" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-sm-1 col-1 pr-0">
                        <a href="/#" data-toggle="modal" data-target="#schedule">
                          <i
                            className="fas fa-plus-square"
                            style={{ color: "#C4C4C4" }}
                          />
                        </a>
                      </div>
                      <div className="col-sm-10 col-9 pl-0">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <p
                              className="h-100"
                              style={{ lineHeight: "2.5rem" }}
                            >
                              {" "}
                              Personal Loan(N200,000)
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="r-9">July 2018</p>
                          <p className="r-9">Tenor -24 Months</p>
                          <p className="r-9">July 2020</p>
                        </div>
                      </div>
                      <div className="col-sm-1 col-1 px-0">
                        <a href="/#" data-toggle="modal" data-target="#payoff">
                          <img alt="gropu" src="http://hib.hh-converge.com/Converge-vF/img/Group 11 (2).png" height="17px" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-right">
                    <a
                      href="/#"
                      className="r-9"
                      data-toggle="modal"
                      data-target="#running"
                    >
                      {" "}
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-lg-0 d-flex-x">
              <div className="h-48 mb-auto">
                <div className="whitebox px-3 py-2 h-100">
                  <div className="row mt-2">
                    <div className="col-sm-8 col-8">
                      <p className="r-12">LOAN STATUS</p>
                    </div>
                    <div className="col-sm-4 col-4">
                      <img alt="img" src="http://hib.hh-converge.com/Converge-vF/img/Group 11 (1).png"  />
                    </div>
                    <div className="col-sm-8 col-8">
                      <p className="r-9 m-0">LOAN TYPE</p>
                      <p className="r-9 m-0">Rent</p>
                    </div>
                    <div className="col-sm-4 col-4">
                      <p className="r-7 m-0" style={{ color: "#849AD2" }}>
                        STATUS
                      </p>
                    </div>
                    <div className="col-sm-8 col-8">
                      <p className="r-14 m-0">
                        200,000.00 <sup>NGN</sup>{" "}
                      </p>
                      <div className="d-flex w-100">
                        <p className="r-9 w-45 mb-0 text-danger">Jul - 2018</p>
                        <p className="r-9 mb-0 text-success">Jun - 2020</p>
                      </div>
                    </div>
                    <div className="col-sm-4 col-4">
                      <p className="r-9 m-0">Finance</p>
                    </div>
                    <div className="col-12">
                      <hr className="hr-x" />
                      <p className="m-0 r-9">Personal Loan</p>
                    </div>
                    <div className="col-sm-8 col-8">
                      <p className="m-0 r-14">
                        200,000.00 <sup>NGN</sup>{" "}
                      </p>
                      <div className="d-flex w-100">
                        <p className="r-9 w-45 mb-0 text-danger">Jul - 2018</p>
                        <p className="r-9 mb-0 text-success">Jun - 2020</p>
                      </div>
                    </div>
                    <div className="col-sm-4 col-4">
                      <small className="r-9">Finance</small>
                    </div>
                    <div className="col-12 text-right">
                      <a
                        href="/#"
                        className="r-9"
                        data-toggle="modal"
                        data-target="#existing"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-48">
                <div className="whitebox px-3 py-2 h-100">
                  <div className="row mt-2">
                    <div className="col-sm-8 col-8">
                      <p className="r-12">LOAN PAYOFF</p>
                    </div>
                    <div className="col-sm-4 col-4">
                      <img alt="group" src="http://hib.hh-converge.com/Converge-vF/img/Group 11.png" />
                    </div>
                    <div className="col-sm-8 col-8 mt-2">
                      <p className="r-8 m-0">Rent</p>
                    </div>
                    <div className="col-sm-4 col-4">
                      <p className="r-7 m-0" style={{ color: "#849AD2" }}>
                        STATUS
                      </p>
                    </div>
                    <div className="col-sm-8 col-8">
                      <p className="r-14 m-0">
                        200,000.00 <sup>NGN</sup>{" "}
                      </p>
                    </div>
                    <div className="col-sm-4 col-4">
                      <p className="r-9 m-0">FINCON</p>
                    </div>
                    <div className="col-12">
                      <hr className="hr-x" />
                      <p className="m-0 r-8">Personal Loan</p>
                    </div>
                    <div className="col-sm-8 col-8">
                      <p className="m-0 r-14">
                        200,000.00 <sup>NGN</sup>{" "}
                      </p>
                    </div>
                    <div className="col-sm-4 col-4">
                      <small className="r-9">HR</small>
                    </div>
                    <div className="col-12 text-right mt-2">
                      <a
                        href="/#"
                        className="r-9"
                        data-toggle="modal"
                        data-target="#existing"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-3 pr-0">
              <div className="card shadow-x border-0 p-3 overflow-auto">
                <div className="row">
                  <div className="col-12">
                    <h4 className="r-12">PENDING APPROVAL LOANS</h4>
                  </div>
                  <div className="col-lg-11 mb-3">
                    <div className="border rounded w-103">
                      <div className="row">
                        <div className="col-sm-4 pr-0">
                          <div className="p-2 border-right">
                            <p className="c-12 m-0">Personal Loan: N200,000</p>
                            <p className="m-0 c-9">
                              Tenure: Jul. 2018 - Jun. 2020
                            </p>
                            <p className="rc-9 m-0">Awaiting Approval: CFO</p>
                          </div>
                        </div>
                        <div className="col-sm-8 pl-0">
                          <ul className="progress-indicator">
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6"> Line 1</p>
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6"> Line 2</p>
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />
                              <p className="r-6">HR</p>
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Audit</p>{" "}
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">CEO</p>{" "}
                            </li>
                            <li className="ongoing">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">CFO</p>
                            </li>
                            <li>
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Staff</p>{" "}
                            </li>
                            <li>
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Finance</p>{" "}
                            </li>
                            <li>
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Completed</p>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 mb-3 d-flex align-items-center">
                    <a href="/#">
                      <i
                        className="fas fa-times-circle"
                        style={{ fontSize: 16, color: "#E31C1C" }}
                      />
                    </a>
                  </div>
                  <div className="col-lg-11">
                    <div className="border rounded w-103">
                      <div className="row">
                        <div className="col-sm-4 pr-0">
                          <div className="p-2 border-right">
                            <p className="c-12 m-0">Personal Loan: N200,000</p>
                            <p className="m-0 c-9">
                              Tenure: Jul. 2018 - Jun. 2020
                            </p>
                            <p className="rc-9 m-0">Awaiting Approval: CFO</p>
                          </div>
                        </div>
                        <div className="col-sm-8 pl-0">
                          <ul className="progress-indicator">
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6"> Line 1</p>
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6"> Line 2</p>
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />
                              <p className="r-6">HR</p>
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Audit</p>{" "}
                            </li>
                            <li className="completed">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">CEO</p>{" "}
                            </li>
                            <li className="ongoing">
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">CFO</p>
                            </li>
                            <li>
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Staff</p>{" "}
                            </li>
                            <li>
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Finance</p>{" "}
                            </li>
                            <li>
                              {" "}
                              <span className="bubble" />{" "}
                              <p className="r-6">Completed</p>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 mb-3 d-flex align-items-center">
                    <a href="/#">
                      <i
                        className="fas fa-times-circle"
                        style={{ fontSize: 16, color: "#E31C1C" }}
                      />
                    </a>
                  </div>
                  <div className="col-12 mt-2 text-right">
                    <a
                      href="/#"
                      className="r-9"
                      data-toggle="modal"
                      data-target="#pending"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4 col-sm-push-4">
        <div className="lightrectangle">
          <div className="row">
            <div className="col-12">
              <img alt="guy" src="http://hib.hh-converge.com/Converge-vF/img/guy.png" className="w-100 ad-img img-fluid" />
            </div>
            <div className="col-12 px-lg-4">
              <div className="px-3">
                <p className="text-right">
                  <img alt="group"
                    src="http://hib.hh-converge.com/Converge-vF/img/Group 12 (3).png"
                    height="30px"
                    style={{ marginBottom: "-20px" }}
                  />
                </p>
              </div>
              <div className="notifications">
                <div className="d-flex">
                  <div className="r-10 pt-1">NOTIFICATIONS</div>
                  <div className="ml-auto">
                    <a href="/#">Mark all as read</a>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="note">
                      <div className="row">
                        <div className="col-2">
                          <i
                            className="fas fa-check-circle"
                            style={{ fontSize: 30, color: "#5CC082" }}
                          />
                        </div>
                        <div className="col-10">
                          <p className="c-10">
                            Your Personal loan payoff of N2,000,000 has been
                            approved by HR
                            <br />
                            <small className="l-10">a day ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="note">
                      <div className="row">
                        <div className="col-2">
                          <i
                            className="fas fa-times-circle"
                            style={{ fontSize: 30, color: "#E31C1C" }}
                          />
                        </div>
                        <div className="col-10">
                          <p className="c-10">
                            Your Personal loan payoff of N2,000,000 has been
                            approved by HR
                            <br />
                            <small className="l-10">a day ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className>
                      <div className="row">
                        <div className="col-2">
                          <img alt="calendar"
                            src="http://hib.hh-converge.com/Converge-vF/img/ant-design_calendar-outline.png"
                            height="30px"
                          />
                        </div>
                        <div className="col-10">
                          <p className="c-10">
                            Your Personal loan payoff of N2,000,000 has been
                            approved by HR
                            <br />
                            <small className="l-10">a day ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className>
                      <div className="row">
                        <div className="col-2">
                          <img alt="ant"
                            src="http://hib.hh-converge.com/Converge-vF/img/ant-design_calendar-outline.png"
                            height="30px"
                          />
                        </div>
                        <div className="col-10">
                          <p className="c-10">
                            Your Personal loan payoff of N2,000,000 has been
                            approved by HR
                            <br />
                            <small className="l-10">a day ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

    </div>);
  }
}
