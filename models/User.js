import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "이름 필수"
  },
  point: {
    type: Number,
    default: 0
  },
  parentPhone: String,
  childPhone: String,
  createAt: {
    type: Date,
    default: Date.now
  },
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History"
    }
  ]
});

const model = mongoose.model("User", UserSchema);

export default model;
