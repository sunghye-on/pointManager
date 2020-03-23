import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  value: {
    type: Number,
    required: "값은 필수 입니다"
  },
  description: {
    type: String,
    required: "설명을 적어주세요"
  }
});

export default HistorySchema;
