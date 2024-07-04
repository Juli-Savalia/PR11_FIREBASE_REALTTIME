import { combineReducers } from "redux";
import { FormReducer } from "./FormReducer";

const rootReducer = combineReducers({
  Form: FormReducer,
});

export default rootReducer;
