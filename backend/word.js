// backend/models/Word.js
import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
    term: { type: String, required: true, unique: true },
    meaning: { type: String, required: true },
    example: String,
    upvotes: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "pending" }, // pending, approved
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Word", wordSchema);
