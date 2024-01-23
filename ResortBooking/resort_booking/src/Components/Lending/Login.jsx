import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [selectedAdminBlock, setAdminBlock] = useState(false);
  const [selectedManagerBlock, setManagerBlock] = useState(false);
  const [selectedCustomerBlock, setCustomerBlock] = useState(false);
  const [hideBlocks, setHideBlocks] = useState(false);

  const handleClickAdmin = () => {
    setAdminBlock(true);
    setHideBlocks(true); 
  };

  const handleClickCustomer = () => {
    setCustomerBlock(true);
    setHideBlocks(true); 
  };

  const handleClickManager = () => {
    setManagerBlock(true);
    setHideBlocks(true); 
  };

  const handleGoBack = () => {
    setAdminBlock(false);
    setManagerBlock(false);
    setCustomerBlock(false);
    setHideBlocks(false);
  };

  return (
    <div className="bg-login">
      <div>
        {!hideBlocks && (
          <>
          <div id="login-block">
            {/* <div className="admin-block" onClick={handleClickAdmin}>
              <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4">
                <h1 className="block-text">Admin</h1>
              </div>
            </div>
            <div className="manager-block" onClick={handleClickManager}>
              <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4">
                <h1 className="block-text">Manager</h1>
              </div>
            </div> */}
            <div className="customer-block" onClick={handleClickCustomer}>
              <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4">
                <h1 className="block-text">Customer</h1>
              </div>
            </div>
            </div>
          </>
        )}

        {/* {selectedAdminBlock && (
          <div className="admin-login" id="admin-login">
            <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4 admin-login-block">
              <h1 className="block-text-admin">Admin Login</h1>

              <div>
                <form className="center-form">
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form user-label-login">Username:  </label>
                  <input type="text" name="username" className="user-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form password-label-login">Password:  </label>
                  <input type="password" name="password" className="password-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded login-submit">Login</button><br></br><br></br> */}
                  {/* <h3>New User ? <Link to="/registeration">Register</Link></h3><br></br>
                  <h3>Wrong Login ?{" "}<a href="#" onClick={handleGoBack}>Go Back</a></h3> */}
                {/* </form>
              </div>
            </div>
          </div>
        )} */}

        {/* {selectedManagerBlock && (
          <div className="manager-login" id="manager-login">
            <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4 admin-login-block">
              <h1 className="block-text-admin">Hotel Manager Login</h1>

              <div>
                <form className="center-form">
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form user-label-login">Username:  </label>
                  <input type="text" name="username" className="user-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form password-label-login">Password:  </label>
                  <input type="password" name="password" className="password-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded login-submit">Login</button><br></br><br></br> */}
                  {/* <h3>New User ? <Link to="/registeration">Register</Link></h3><br></br>
                  <h3>Wrong Login ?{" "}<a href="#" onClick={handleGoBack}>Go Back</a></h3> */}
                {/* </form>
              </div>
            </div>
          </div>
        )} */}

        {selectedCustomerBlock && (
          <div className="customer-login" id="customer-login">
            <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4 admin-login-block">
              <h1 className="block-text-admin">Customer Login</h1>

              <div>
                <form className="center-form">
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form user-label-login">Username:  </label>
                  <input type="text" name="username" className="user-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form password-label-login">Password:  </label>
                  <input type="password" name="password" className="password-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded login-submit">Login</button><br></br><br></br>
                  <h3>New User ? <Link to="/registeration">Register</Link></h3><br></br>
                  <h3>Wrong Login ?{" "}<a href="#" onClick={handleGoBack}>Go Back</a></h3>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
