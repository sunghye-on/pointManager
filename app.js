import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
import session from "express-session";
import { join } from "./controller/userC";
import { search } from "./controller/homeC";

const app = express();
// app.use(express.static("src"));
//세션 모듈이 직접 쿠키에 접근 해서 쿠키 파서는 쓸일이 없다
// app.use(cookieParser());
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "@#@$MYSIGN#@$#$",
    resave: false,
    saveUninitialized: true
  })
);
//앱의 보안을 돕는helmet
app.use(helmet());
//view엔진을 ejs로 진행
app.set("views", __dirname + "/views");
app.use("/src", express.static("src"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
//로그정보를 찍어 주는 morgan
app.use(morgan("dev"));
app.use(localsMiddleware);
//해당 URL이 요청되고 해당하는 함수들이 호출된다.
var gRouter = require("./routes/globalRouter")(app);
var uRouter = require("./routes/userRouter")(app);

export default app;
