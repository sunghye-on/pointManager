import routes from "../routes";
import User from "../models/User";

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
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "로그인" });
export const postLogin = (req, res) => {
  console.log(req.body);
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //로그아웃 나중에 만들기
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "users" });

export const userDetail = async (req, res) => {
  const {
    params: { name }
  } = req;
  try {
    const user = await User.findById(name);
    // console.log(video);
    res.render("userDetail", { pageTitle: "내 정보", user });
  } catch (error) {
    console.log(`ERROR ❌ ${error}`);
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
