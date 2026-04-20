const express = require("express");
const router = express.Router();
const Supply = require("../models/Supply");


router.get("/", async (req, res) => {
  const data = await Supply.find();
  res.json(data);
});


router.post("/", async (req, res) => {
  const newItem = new Supply(req.body);
  await newItem.save();
  res.json(newItem);
});


router.put("/:id", async (req, res) => {
  const updated = await Supply.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


router.delete("/:id", async (req, res) => {
  await Supply.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;