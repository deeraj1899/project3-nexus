const express = require('express');
const router = express.Router();
const Information = require('../model/information');
const Feedback = require('../model/feedback');
router.get("/",async(req,res)=>{
    res.render("home.ejs");
})
// Route for handling Information form submission
router.post('/information', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newInformation = new Information({ name, email });
    await newInformation.save();
    res.redirect("/home");
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit information', details: err });
  }
});

// Route for handling Feedback form submission
router.post('/feedback', async (req, res) => {
  const { name, email, feedback } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();
    res.redirect("/home");
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit feedback', details: err });
  }
});

module.exports = router;