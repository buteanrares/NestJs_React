import { combineReducers } from "redux";
import userReducer from "./userReducer";
import billReducer from "./billReducer";
import invoiceReducer from "./invoiceReducer";

const rootReducer = combineReducers({
  user: userReducer,
  bills: billReducer,
  invoices: invoiceReducer,
});

export default rootReducer;
