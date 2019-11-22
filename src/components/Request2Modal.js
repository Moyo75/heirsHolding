import React, { Component } from "react";

export default class Request2Modal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="request"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="requestmodal"
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
                      alt="Close"
                    />
                  </span>
                </button>
              </div>
              <div className="modal-header" style={{ background: "#E31C1C" }}>
                <h5
                  className="modal-title r-14 text-white"
                  id="exampleModalLongTitle"
                >
                  Loan Schedule
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
                            <th>Period</th>
                            <th>Opening Balance</th>
                            <th>Monthly Repayable</th>
                            <th>Interest</th>
                            <th>Principal</th>
                            <th>Ending Balance</th>
                            <th>Amount Paid</th>
                            <th>Date Paid</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mar-2016</td>
                            <td>80,000.00</td>
                            <td>6,848.60</td>
                            <td>333.33</td>
                            <td>6,515.27</td>
                            <td>73,484.73</td>
                            <td>73,484.73</td>
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Mar-2016</td>
                            <td>80,000.00</td>
                            <td>6,848.60</td>
                            <td>333.33</td>
                            <td>6,515.27</td>
                            <td>73,484.73</td>
                            <td>73,484.73</td>
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Mar-2016</td>
                            <td>80,000.00</td>
                            <td>6,848.60</td>
                            <td>333.33</td>
                            <td>6,515.27</td>
                            <td>73,484.73</td>
                            <td>73,484.73</td>
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Mar-2016</td>
                            <td>80,000.00</td>
                            <td>6,848.60</td>
                            <td>333.33</td>
                            <td>6,515.27</td>
                            <td>73,484.73</td>
                            <td>73,484.73</td>
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Mar-2016</td>
                            <td>80,000.00</td>
                            <td>6,848.60</td>
                            <td>333.33</td>
                            <td>6,515.27</td>
                            <td>73,484.73</td>
                            <td>73,484.73</td>
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Mar-2016</td>
                            <td>80,000.00</td>
                            <td>6,848.60</td>
                            <td>333.33</td>
                            <td>6,515.27</td>
                            <td>73,484.73</td>
                            <td>73,484.73</td>
                            <td />
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <a href="/#">
                      <img
                        alt="print"
                        src="http://hib.hh-converge.com/Converge-vF/img/entypo-print.png"
                        height="12px"
                      />
                    </a>
                    <a href="/#">
                      <img
                        alt="print"
                        src="http://hib.hh-converge.com/Converge-vF/img/foundation-page-export-csv.png"
                        height="12px"
                      />
                    </a>
                  </div>
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
