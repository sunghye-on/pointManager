import mongoose from "mongoose";
import "./models/User";
import "./models/History";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

const handleDBOpen = () => console.log("🖐 Open DB!");
const handleDBError = error => console.log(`🤮 DB Connection ERROR : ${error}`);

db.once("open", handleDBOpen);
db.on("error", handleDBError);

// export const users = [
//   {
//     id: 123123,
//     name: "강예린",
//     point: 50000,
//     parentPhone: "010-2626-2626",
//     childPhone: "010-3035-2020",
//     history: [
//       {
//         date: "2020/2/2",
//         value: -3000,
//         description: "떡볶이 1"
//       },
//       {
//         date: "2020/2/16",
//         value: 50000,
//         description: "50000원 충전"
//       }
//     ]
//   },
//   {
//     id: 23232123,
//     name: "김성현",
//     point: 1231523,
//     parentPhone: "010-3834-3843",
//     childPhone: "010-3843-4383",
//     history: [
//       {
//         date: "2020/2/2",
//         value: -30000,
//         description: "떡볶이 10"
//       },
//       {
//         date: "2020/2/16",
//         value: 500000,
//         description: "500000원 충전"
//       }
//     ]
//   }
// ];
