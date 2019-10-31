import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter
});
// combineReducers takes an object whose values are different reducing functions
// and returns a single reducing function you can pass into createStore()
