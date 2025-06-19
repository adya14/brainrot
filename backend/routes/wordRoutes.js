// backend/routes/wordRoutes.js
import express from "express";
import Word from "../models/Word.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const words = await Word.find({ status: "approved" }).sort({ upvotes: -1 });
    res.json(words);
});

router.post("/add", async (req, res) => {
    const { term, meaning, example } = req.body;
    const newWord = new Word({ term, meaning, example });
    await newWord.save();
    res.json({ message: "Word submitted for review!" });
});

router.patch("/:id/upvote", async (req, res) => {
    const word = await Word.findById(req.params.id);
    word.upvotes += 1;
    await word.save();
    res.json({ message: "Upvoted!" });
});

export default router;
