import routes from "../routes";
import { home, search } from "../controller/homeC";
import {
  logout,
  getLogin,
  postLogin,
  getJoin,
  postJoin
} from "../controller/userC";

module.exports = function(app) {
  app.get(routes.home, home);
  app.get(routes.join, getJoin);
  app.post(routes.join, postJoin);
  app.get(routes.login, getLogin);
  app.post(routes.login, postLogin);
  app.get(routes.logout, logout);
  app.get(routes.search, search);
};
