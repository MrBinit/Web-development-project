import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you intend to use it

const Orders = () => {
  return (
    <div className="-flex justify-content-center align-items-center flex-column">
      {/* No Orders */}
      <div className="col-12 alert alert-info text-center mt-3">
        No Orders
        <Link className="btn btn-success mx-2 px-3 py-2" to="/" style={{ fontSize: "12px" }}>
          START Purchase
        </Link>
      </div>

      {/* Orders Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {/* Order 1 */}
            <tr className="alert-success">
              <td>
                <a href="/order/1" className="link">
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>Dec 12, 2021</td>
              <td>Rs234</td>
            </tr>

            {/* Order 2 (Cancelled) */}
            <tr className="alert-danger">
              <td>
                <a href="/order/2" className="link">
                  2
                </a>
              </td>
              <td>Not Paid</td>
              <td>Dec 12, 2021</td>
              <td>Rs34</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
