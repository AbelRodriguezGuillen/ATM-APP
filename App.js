import React from "react";
import "./styles.css";
import LoginPage from "./components/login";
import ATM from "./components/ATM";
import Transactions from "./components/transactions";

export default function App() {
  return (
    <div id="container">
      {/* <div id="blankSpace">blank space</div> */}
      <main id="main">
        <LoginPage />
      </main>
      <div id="atm">
        <ATM />
      </div>
      <div id="transactions">
        <Transactions />
      </div>
    </div>
  )
}

