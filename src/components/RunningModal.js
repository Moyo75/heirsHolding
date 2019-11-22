import React, { Component } from "react";

export default class RunningModal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="running"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="runningmodal"
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
                    <img src="img/close-ic.svg" alt="close-ic" />
                  </span>
                </button>
              </div>
              <div className="modal-header" style={{ background: "#E31C1C" }}>
                <h5
                  className="modal-title r-14 text-white"
                  id="exampleModalLongTitle"
                >
                  Running Loans
                </h5>
                {/* <span class="ml-auto r-12 text-white">
                <div class="input-group search">
                    <div class="input-group-append pt-2"><i class="fas fa-search text-white"></i></div>
                    <input type="text" class="form-control">
                </div>
            </span> */}
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 my-3">
                    <div className="table-responsive">
                      <table className="table loan">
                        <thead>
                          <tr>
                            <th />
                            <th>Loan Type</th>
                            <th>Rate</th>
                            <th>Principal</th>
                            <th>Monthly Deductable</th>
                            <th>Balance</th>
                            <th>Tenor</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="/#">
                                <i className="fas fa-plus-square" />
                              </a>
                            </td>
                            <td>Mar-2016</td>
                            <td>5%</td>
                            <td>80,000.00</td>
                            <td>333.33</td>
                            <td>6,848.60</td>
                            <td>73,484.73</td>
                            <td>May-2019</td>
                            <td>73,484.73</td>
                            <td>Running</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <a href="/#">
                                <i className="fas fa-plus-square" />
                              </a>
                            </td>
                            <td>Mar-2016</td>
                            <td>5%</td>
                            <td>80,000.00</td>
                            <td>333.33</td>
                            <td>6,848.60</td>
                            <td>73,484.73</td>
                            <td>May-2019</td>
                            <td>73,484.73</td>
                            <td>Running</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <a href="/#">
                                <i className="fas fa-plus-square" />
                              </a>
                            </td>
                            <td>Mar-2016</td>
                            <td>5%</td>
                            <td>80,000.00</td>
                            <td>333.33</td>
                            <td>6,848.60</td>
                            <td>73,484.73</td>
                            <td>May-2019</td>
                            <td>73,484.73</td>
                            <td>Running</td>
                            <td />
                          </tr>
                          <tr>
                            <td>
                              <a href="/#">
                                <i className="fas fa-plus-square" />
                              </a>
                            </td>
                            <td>Mar-2016</td>
                            <td>5%</td>
                            <td>80,000.00</td>
                            <td>333.33</td>
                            <td>6,848.60</td>
                            <td>73,484.73</td>
                            <td>May-2019</td>
                            <td>73,484.73</td>
                            <td>Running</td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6 text-right">
                    <button className="btn btn-green" data-dismiss="modal">
                      OK
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
