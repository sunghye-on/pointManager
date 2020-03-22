import { users } from "../db";

//json타입으로 정보를 전달가능
export const home = (req, res) =>
  res.render("home", {
    length: 5,
    pageTitle: "home",
    users
  });
export const search = (req, res) => {
  const {
    //term을 searchBy로 해준다. 즉 req.query.term === searchBy
    query: { bar: searchBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchBy });
};
