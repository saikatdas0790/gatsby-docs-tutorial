const isBrowser = () => typeof window !== "undefined";

const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

const handleLogin = ({ username, password }) => {
  if (username === "john" && password === "pass") {
    return setUser({
      username: "john",
      name: "Johnny",
      email: "johnny@example.org",
    });
  }
  return false;
};

const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

const logout = callback => {
  setUser({});
  callback();
};

export { isBrowser, getUser, handleLogin, isLoggedIn, logout };
