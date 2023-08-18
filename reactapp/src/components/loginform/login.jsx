import React from 'react';
import './loginform.css'

function login() {
  return (
      <div className="login-modal" id="login-modal">
          <div className="login-container" id="login-box">
              <header>Logga in</header>
              <div className="form-outer">
                  <form action="#">
                      <div className="page">
                          <div className="field">
                              <div className="label">Email</div>
                              <input type="text" name="email" placeholder="Email" required />
                              <div className="label">L�senord</div>
                              <input type="password" name="password" placeholder="L�senord" required />
                              <a href="#">Gl�mt l�senord?</a>
                              <div className="field">
                                  <button>Logga in</button>
                                  <p>Inget konto? <a href="#">Skapa ett nu!</a></p>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default login;