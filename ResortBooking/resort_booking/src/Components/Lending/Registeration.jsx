import React from 'react';
import { Link } from 'react-router-dom';

const Registeration = () => {
  return (
    <div>
      <div className='bg-reg'>
        <div>
          <form>
          <div className="admin-login" id="admin-login">
            <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-md p-4 customer-reg-block">
              <h1 className="block-text-admin">Customer Registration</h1>

              <div>
                <form className="center-form">
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form user-label-login">Full Name:  </label>
                  <input type="text" name="username" className="user-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form user-label-login">Username:  </label>
                  <input type="text" name="username" className="user-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form phone-label-login">Phone Number:  </label>
                  <input type="text" name="username" className="user-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <div><label className="block text-sm font-medium leading-6 text-gray-900 label-form password-label-login">Password:  </label>
                  <input type="password" name="password" className="password-input-login block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 input-form"/></div><br></br>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded login-submit">Sign UP</button><br></br><br></br>
                  <h3>Already User ? <Link to="/login">Login</Link></h3>
                </form>
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registeration
