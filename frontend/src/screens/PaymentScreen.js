import React from "react";
import { Link } from "react-router-dom";
//import Header from "../components/Header"; // Adjust the import path

const PaymentScreen = () => {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-container">
        <form className="Login2 col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="PayPal" id="paypalRadio" />
              <label className="form-check-label" htmlFor="paypalRadio">
                FonePay or Cash
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
          <Link to="/placeorder" className="text-white">
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
