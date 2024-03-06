import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Invoices from "./components/Invoices";
import Bills from "./components/Bills";
import LoginPage from "./components/Login";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/bills" component={Bills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
