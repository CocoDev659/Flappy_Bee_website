const mongoose = require("mongoose");

const schemaTotalScore = new mongoose.Schema({
  addressWallet: {
    type: String,
    require: true,
  },
  totalScore: {
    type: Number,
    require: true,
  },
  flagClaimed: {
    type: String,
    default: false,
    require: true,
  },
  timeClaimed: {
    type: String,
    require: true,
  },
});

const modelTotalScore = mongoose.model("totalScores", schemaTotalScore);

module.exports = {
  modelTotalScore: modelTotalScore,
};