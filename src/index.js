import React from "react";
import ReactDOM from "react-dom";
import FacebookAuth from "./components/FacebookAuth";
import "./styles.css";

function App() {
  return (
    <div class="container">
      <form action="#">
        <div class="row justify-content-md-center">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="login-screen">
              <div class="login-box">
                <FacebookAuth api_key={"Fcdn9FAU7dhM0TzQ7umztVA28NM"} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
