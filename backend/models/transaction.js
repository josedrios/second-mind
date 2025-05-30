const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  info: { type: String, required: true },
  amount: { type: Number, required: true},
  category: {
    type: String,
    enum: ["save", "need", 'sub', 'fun'],
    default: "need",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;