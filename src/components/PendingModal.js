import React, { Component } from "react";

export default class PendingModal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="pending"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="pendingmodal"
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
              <div className="modal-header" style={{ background: "#E31C1C" }}>
                <h5
                  className="modal-title r-14 text-white"
                  id="exampleModalLongTitle"
                >
                  Loan Approval Details
                </h5>
                <span className="ml-auto r-12 text-white">
                  <div className="input-group search">
                    <div className="input-group-append pt-2">
                      <i className="fas fa-search text-white" />
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </span>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 my-3">
                    <div className="table-responsive">
                      <table className="table table-striped loan">
                        <thead>
                          <tr>
                            <th />
                            <th>Loan ID</th>
                            <th>Date</th>
                            <th>Role</th>
                            <th>Approval Officer</th>
                            <th>Action Taken</th>
                            <th>Comment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <b>1</b>
                            </td>
                            <td>1457</td>
                            <td>24-Sep-2018 (09:29:30 AM)</td>
                            <td>Initiator</td>
                            <td>Olalekan Wahab (Active)</td>
                            <td>Completed</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <b>2</b>
                            </td>
                            <td>1457</td>
                            <td>24-Sep-2018 (09:29:30 AM)</td>
                            <td>Initiator</td>
                            <td>Olalekan Wahab (Active)</td>
                            <td>Completed</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <b>3</b>
                            </td>
                            <td>1457</td>
                            <td>24-Sep-2018 (09:29:30 AM)</td>
                            <td>Initiator</td>
                            <td>Olalekan Wahab (Active)</td>
                            <td>Completed</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <b>4</b>
                            </td>
                            <td>1457</td>
                            <td>24-Sep-2018 (09:29:30 AM)</td>
                            <td>Initiator</td>
                            <td>Olalekan Wahab (Active)</td>
                            <td>Completed</td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6 text-right">
                    <button className="btn btn-green" data-dismiss="modal">
                      Close
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
