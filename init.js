import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3300;

const handleListen = () =>
  console.log(`✅ 서버 연결 완료 http://localhost:${PORT}`);

app.listen(PORT, handleListen);
