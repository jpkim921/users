import React from "react";

export default function WelcomePage() {
  return (
    <div id="welcome-container">
      <div class="container middle-box">
        <h3>Welcome</h3>

        <div class="input-group input-group-lg">
          <input
            type="text"
            class="form-control username"
            placeholder="Username"
          />
        </div>
        <div class="input-group input-group-lg">
          <input
            type="text"
            class="form-control password"
            placeholder="Password"
          />
        </div>
        <div class="input-group input-group-md">
          <button type="submit" class="form-control">
            Login
          </button>
        </div>
        <h4>OR</h4>
        <div>
          <a href="#">
            <button class="form-control">Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
}
