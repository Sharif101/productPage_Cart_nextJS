export const UserGetStorage = (key) => {
  if (typeof localStorage !== "undefined") {
    let data = localStorage.getItem(key);
    if (data) {
      return data;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const UserSetStorage = (key, value) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const UserDefStorage = (key, def) => {
  if (UserGetStorage(key) === false) {
    UserSetStorage(key, def);
  }
  return JSON.parse(UserGetStorage(key));
};
