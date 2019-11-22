import React, { Component } from "react";

export default class FadeModalRequest extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="arequest"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="arequestmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-4">
              <div className="border rounded p-2">
                <div className="row">
                  <div className="col-12 px-4 ">
                    <div className="row border-bottom pb-4">
                      <div className="col-lg-4">
                        <p className="m-0 c-14">
                          <b>12,348,000.00</b>
                        </p>
                        <small
                          className="m-0 c-10"
                          style={{ background: "#F5BAC4" }}
                        >
                          Payoff Amount
                        </small>
                      </div>
                      <div className="col-lg-4">
                        <p className="m-0 c-14">
                          <b>12,348,000.00</b>
                        </p>
                        <small
                          className="m-0 c-10"
                          style={{ background: "#F5BAC4" }}
                        >
                          New Take Home
                        </small>
                      </div>
                      <div className="col-lg-4">
                        <p className="m-0 c-14">
                          <b>12,348,000.00</b>
                        </p>
                        <small
                          className="m-0 c-10"
                          style={{ background: "#F5BAC4" }}
                        >
                          Remaining Balance
                        </small>
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
                      data-target="#approval"
                    >
                      Submit Payoff Request
                    </button>
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
