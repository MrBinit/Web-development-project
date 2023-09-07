import React from "react";

const ProfileTabs = () => {
  return (
    <form className="row form-container">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-fn">UserName</label>
          <input className="form-control" type="text" required />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-email">E-mail Address</label>
          <input className="form-control" type="email" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="account-pass">New Password</label>
          <input className="form-control" type="password" />
        </div>
      </div>
      <div className="col-md-12">
        <button type="submit">Update Profile</button>
      </div>
    </form>
  );
};

export default ProfileTabs;
