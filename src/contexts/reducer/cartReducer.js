import {
  UserDefStorage,
  UserGetStorage,
  UserSetStorage,
} from "../storage/storage";

export const cartState = UserDefStorage("cart", {
  info: [],
  open: false,
  new: false,
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "get":
      return JSON.parse(UserGetStorage("cart"));
    case "set":
      UserSetStorage("cart", {
        ...state,
        info: action.payload,
      });
      return JSON.parse(UserGetStorage("cart"));
    case "remove":
      UserSetStorage("cart", { info: [], open: false });
      return JSON.parse(UserGetStorage("cart"));
    case "open":
      UserSetStorage("cart", { ...state, open: true, new: false });
      return JSON.parse(UserGetStorage("cart"));
    case "close":
      UserSetStorage("cart", { ...state, open: false });
      return JSON.parse(UserGetStorage("cart"));
    case "notify":
      UserSetStorage("cart", { ...state, new: true });
      return JSON.parse(UserGetStorage("cart"));
    default:
      return state;
  }
};
