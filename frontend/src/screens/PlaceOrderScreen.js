import React from "react";
import { Link } from "react-router-dom";
//import Header from "../../components/Header"; // Adjust the import path

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);

  const placeOrderHandler = (e) => {
    e.preventDefault();
    // Add your place order logic here
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          {/* Customer Info */}
          <div className="col-lg-4 col-sm-4 mb-4 mb-lg-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Doe</p>
                <p>admin@example.com</p>
              </div>
            </div>
          </div>

          {/* Order Info */}
          <div className="col-lg-4 col-sm-4 mb-4 mb-lg-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Preference: On-Site</p>
                <p>Pay method: FonePay</p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="col-lg-4 col-sm-4 mb-4 mb-lg-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Preference</strong>
                </h5>
                <p>
                  On-Site
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Products */}
        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* Add product details here */}
          </div>
        </div>

        {/* Total */}
        <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Products</strong>
                </td>
                <td>Rs345</td>
              </tr>
              <tr>
                <td>
                  <strong>Extra toppings</strong>
                </td>
                <td>Rs12</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax</strong>
                </td>
                <td>Rs5</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>Rs362</td>
              </tr>
            </tbody>
          </table>
          <button type="submit" onClick={placeOrderHandler}>
            PLACE ORDER
          </button>
          {/* Add error message here */}
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
