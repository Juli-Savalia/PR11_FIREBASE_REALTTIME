let initial = {
  data: [],
  err: null,
};

export const FormReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_USER  ": {
      return {
        ...state,
        data: [...state.data, action.payload],
        err: null,
      };
    }
    default:
      return state;
  }
};

export default FormReducer;
