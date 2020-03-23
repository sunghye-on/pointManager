import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.title = "Burmuri";
  res.locals.routes = routes;
  res.locals.user = {
    isAuth: true,
    id: 1
  };
  next();
};
