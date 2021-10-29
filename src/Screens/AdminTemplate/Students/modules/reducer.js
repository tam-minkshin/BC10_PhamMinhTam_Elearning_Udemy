import * as ActionType from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const listUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_USERS_REQ:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.LIST_USERS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.LIST_USERS_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listUsersReducer;
