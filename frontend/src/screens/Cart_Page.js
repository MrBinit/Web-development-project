import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Adjust the import path
import { PayPalButton } from "react-paypal-button-v2";

const OrderScreen = () => {
  window.scrollTo(0, 0);
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
                <p>
                  <a href="mailto:admin@example.com">admin@example.com</a>
                </p>
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
               <p>Location: On-site</p>
                <p>Pay method: FonePay</p>
                <div className="bg-info p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                    Paid on Oct 12, 2023
                  </p>
                </div>
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
                  <strong>Preferences</strong>
                </h5>
                <p>
                  location: On-site
                </p>
                <div className="bg-danger p-1 col-12">
                  <p className="text-white text-center text-sm-start">
                    Not Delivered
                  </p>
                </div>
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
                  <strong>Food</strong>
                </td>
                <td>RS234</td>
              </tr>
              <tr>
                <td>
                  <strong>Location </strong>    
                </td>
                <td>Rs566</td>
              </tr>
              <tr>
                <td>Rs234</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax</strong>
                </td>
                <td>Rs3</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>Rs567</td>
              </tr>
            </tbody>
          </table>
          <div className="col-12">
            <PayPalButton amount={345} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
