const initialState = {
  bills: [],
  error: null,
};

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BILLS":
      return { ...state, bills: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default billReducer;
