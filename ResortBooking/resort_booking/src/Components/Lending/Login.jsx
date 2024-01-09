import React from "react";

const Login = () => {
  return (
    <div className="bg-login">
      <div className="admin-block">
        <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4">
          <h1 className="block-text">Admin</h1>
        </div>
      </div>
      <div className="manager-block">
        <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4">
          <h1 className="block-text">Manager</h1>
        </div>
      </div>
      <div className="customer-block">
        <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4">
          <h1 className="block-text">Customer</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
