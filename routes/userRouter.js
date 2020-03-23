import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controller/userC";

module.exports = function(app) {
  app.get(routes.users, users);
  app.get(routes.userDetail, userDetail);
  app.get(routes.editProfile, editProfile);
  app.get(routes.changePassword, changePassword);
};
