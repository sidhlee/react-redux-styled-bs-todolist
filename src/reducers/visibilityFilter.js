import { VisibilityFilters } from "../actions";

// { visibilityFilter: string }
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
// store_state: { vibilityFilter: string(SHOW_ALL|SHOW_COMPLETED|SHOW_ACTIVE) }
