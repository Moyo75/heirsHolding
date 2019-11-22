import React, { Component } from "react";

export default class FadeModal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="payoff"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="payoffmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="row p-3">
                <div className="col-lg-6">
                  <div className="border rounded p-2">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="p-1">
                            <img
                              alt="outline"
                              src="http://hib.hh-converge.com/Converge-vF/img/ant-design_calendar-outline (2).png"
                              height="24px"
                            />
                          </div>
                          <div className="p-1">
                            <p className="m-0 c-14">
                              <b>11</b>
                            </p>
                            <small
                              className="m-0 c-10"
                              style={{ background: "#F5BAC4" }}
                            >
                              Remaining Months
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="p-1">
                            <img
                              alt="ant"
                              src="http://hib.hh-converge.com/Converge-vF/img/ant-design_home-fill.png"
                              height="24px"
                            />
                          </div>
                          <div className="p-1">
                            <p className="m-0 c-14">
                              <b>12,348,000.00</b>
                              <sup>NGN</sup>
                            </p>
                            <small
                              className="m-0 c-10"
                              style={{ background: "#F5BAC4" }}
                            >
                              Current Take Home
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <select className="form-control loan">
                        <option value>Payment Mode</option>
                        <option value>Transfer</option>
                        <option value>Transfer</option>
                      </select>
                    </div>
                    <div className="col-12 mt-5">
                      <select className="form-control loan">
                        <option value>Payoff Method</option>
                        <option value>Transfer</option>
                        <option value>Transfer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-right mt-3">
                  <button className="btn btn-red" data-dismiss="modal">
                    Cancel
                  </button>
                  <button
                    className="btn btn-green"
                    data-toggle="modal"
                    data-target="#arequest"
                  >
                    Analyse Request
                  </button>
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
