import routes from "../routes";
import { home, search } from "../controller/homeC";
import { logout, login, getJoin, postJoin } from "../controller/userC";

module.exports = function(app) {
  app.get(routes.home, home);
  app.get(routes.join, getJoin);
  app.post(routes.join, postJoin);
  app.get(routes.login, login);
  app.get(routes.logout, logout);
  app.get(routes.search, search);
};
