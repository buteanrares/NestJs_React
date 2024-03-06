const initialState = {
  invoices: [],
  error: null,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INVOICES":
      return { ...state, invoices: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default invoiceReducer;
