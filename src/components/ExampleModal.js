import React, { Component } from "react";

export default class ExampleModal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content position-relative">
              <div className="close-button">
                <button
                  type="button"
                  className="close-modal"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img
                      src="http://hib.hh-converge.com/Converge-vF/img/close-ic.svg"
                      alt="close-ic"
                    />
                  </span>
                </button>
              </div>
              <div className="row">
                <div className="col-lg-5 col-sm-12" id="eligibility">
                  <div className="grey h-100 py-3 px-3">
                    <div className="row">
                      <div className="col-12">
                        <p className="rc-14">Loan Eligibility</p>
                        <div className="shadow rounded bg-white p-2 mt-5">
                          <div className="row">
                            <div className="col-lg-7 col-sm-6">
                              <p className="c-12">Confirmation Status</p>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                              <div className="gbox">Yes</div>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                              <p className="c-12">Service Duration Months</p>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                              <p className="gbox">24</p>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                              <p className="c-12">Grade</p>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                              <p className="gbox">Senior Analyst</p>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                              <p className="c-12">Last Appraisal Score</p>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                              <div className="gbox">1.83</div>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                              <p className="c-12">Take Home Amount</p>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                              <div className="gbox">1,309,254.50</div>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                              <p className="c-12">DSR(%)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 container col-sm-12">
                  <div className="row pt-3 pr-4 pb-3">
                    <div className="col-lg-7">
                      <a href="/#" className="c-14" id="show_hide">
                        <img
                          alt="group"
                          src="http://hib.hh-converge.com/Converge-vF/img/Group 2 (1).png"
                          id="rott"
                          height="14px"
                        />{" "}
                        Check Loan Eligibility
                      </a>
                    </div>
                    <div className="col-lg-5 text-right">
                      <h5>
                        <span className="badge badge-danger">
                          Request for a loan
                        </span>
                      </h5>
                    </div>
                    <div className="col-12 my-3">
                      <div className="input-group grey-input">
                        <div className="input-group-append r-10 lh-38 px-3">
                          Loan Type
                        </div>
                        <select className="form-control" id="optionselector">
                          <option value="">Please Select</option>
                          <option value="option-1">A</option>
                          <option value="option-2">B</option>
                          <option value="option-3">C</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 mb-3 option option-1" id="option-1">
                      <div className="border rounded p-2">
                        <div className="row">
                          <div className="col-lg-3 pb-3">
                            <div className="position-relative">
                              <div className="position-relative d-inline-block">
                                <img
                                  alt="sub"
                                  src="http://hib.hh-converge.com/Converge-vF/img/Subtract.png"
                                  height="108px"
                                />
                                <div className="count">
                                  <div className="d-flex py-0">
                                    <div className="px-1">
                                      <b className="rc-33 lh-1">2</b>
                                    </div>
                                    <div>
                                      <img
                                        src="img/control-p.svg"
                                        className="h-38p"
                                        alt="percentage control"
                                      />
                                    </div>
                                  </div>
                                  <p className="m-0 r-7 pl-2">Rate</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 py-3">
                            <div className="d-flex mb-2">
                              <img
                                alt="speedo"
                                src="http://hib.hh-converge.com/Converge-vF/img/mdi-speedometer-slow.png"
                                height="15px"
                              />
                              <span className="c-14">
                                <b>12,348,000.00</b>
                                <sup>NGN</sup>
                                <p className="p-text mb-0">
                                  Max. Loan Type Amount (N)
                                </p>
                              </span>
                            </div>
                            <div className="d-flex">
                              <img
                                alt="speed"
                                src="http://hib.hh-converge.com/Converge-vF/img/mdi-speedometer-slow.png"
                                height="15px"
                              />
                              <span className="c-14">
                                <b>12,348,000.00</b>
                                <sup>NGN</sup>
                                <p className="p-text">
                                  Max. Loan Allowable (N)
                                </p>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-5 pl-0 pb-3">
                            <img src="img/mlc.svg" className="mlc" alt="mlc" />
                            <div className="position-relative">
                              <div className="position-relative d-inline-block">
                                <img
                                  alt="subtract"
                                  src="http://hib.hh-converge.com/Converge-vF/img/Subtract.png"
                                  height="108px"
                                />
                                <div className="count">
                                  <div className="d-flex py-0">
                                    <div className="px-1">
                                      <b className="rc-33 lh-1">22</b>
                                    </div>
                                    <div>
                                      <img
                                        src="img/control-p.svg"
                                        className="h-38p"
                                        alt="percentage control"
                                      />
                                    </div>
                                  </div>
                                  <p className="m-0 r-7 ">Annual Gross</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* option-1 */}
                    {/* option-2 */}
                    <div className="col-12 mb-3">
                      <div className="input-group grey-input">
                        <div className="input-group-append r-10 lh-38 px-3">
                          Loan Amount (N)
                        </div>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="input-group grey-input">
                        <div className="input-group-append r-10 lh-38 px-2">
                          Start Date
                        </div>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="End-Date">
                        <h6 className="mb-1">
                          <span className="badge badge-success">End Date</span>
                        </h6>
                        <time>2019-11-8</time>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="d-flex">
                        <div className>
                          <input type="checkbox" />
                        </div>
                        <div className=" pt-1 pl-2 r-10">
                          By ticking this box you agree to{" "}
                          <a className="terms-c" href="/#">
                            terms and conditions
                          </a>{" "}
                          of this loan request
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-right">
                      <button
                        className="btn btn-blue"
                        data-toggle="modal"
                        data-target="#request"
                      >
                        Check Loan Schedule
                      </button>
                      <button className="btn btn-green" data-dismiss="modal">
                        Submit Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
