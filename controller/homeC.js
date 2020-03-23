import User from "../models/User";
//json타입으로 정보를 전달가능
export const home = async (req, res) => {
  try {
    const users = await User.find({});
    res.render("home", { pageTitle: "Home", users });
  } catch (e) {
    console.log(e);
    res.render("home", { pageTitle: "Home", users });
  }
};
export const search = async (req, res) => {
  const {
    //term을 searchBy로 해준다. 즉 req.query.term === searchBy
    query: { bar: searchBy }
  } = req;
  const users = await User.find({});
  res.render("search", { pageTitle: "Search", searchBy, users });
};
// 회원가입 post로 처리되는 정보들
