export const join = (req, res) => res.render("join", { pageTitle: "회원가입" });
export const login = (req, res) => res.render("login", { pageTitle: "로그인" });
export const logout = (req, res) => res.send("logout");

export const users = (req, res) => res.render("users", { pageTitle: "users" });
export const userDetail = (req, res) =>
  res.render("UserDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
