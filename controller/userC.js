import routes from "../routes";

export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "회원가입" });

export const postJoin = (req, res) => {
  const {
    body: { email, pw1, pw2, name, parentPhone, childPhone }
  } = req;
  if (pw1 !== pw2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};
export const login = (req, res) => res.render("login", { pageTitle: "로그인" });
export const logout = (req, res) => res.send("logout");

export const users = (req, res) => res.render("users", { pageTitle: "users" });
export const userDetail = (req, res) =>
  res.render("UserDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
